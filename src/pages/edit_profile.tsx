import Image from 'next/image'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import mongoose from 'mongoose'
import Users from '../model/Users'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Input from '../components/PrimaryInput'
import ToggleInput from '../components/ToggleInput'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useToken from '../components/useToken'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).lean()

	const props = {
		id: user?.id,
		name: user?.name,
		about: user?.about,
		profession: user?.profession,
		dob: user?.dob,
		gender: user?.gender,
		allowFollowers: user?.allowFollowers,
		allowXp: user?.allowXp,
		allowBadge: user?.allowBadge,
		institute: user?.institute,
		location: user?.location
	}
	return {
		props: props,
		revalidate: 10
	}
}

export default function Edit_Profile(props: {
	id: string
	name: string
	about: string
	location: string
	institute: string
	profession: string
	dob: string
	gender: string
	allowFollowers: boolean
	allowXp: boolean
	allowBadge: boolean
}) {
	const id = props.id as string
	const [name, setName] = useState<string>(props.name)
	const [about, setAbout] = useState<string>(props.about)
	const [institute, setInstitute] = useState<string>(props.institute)
	const [location, setLocation] = useState<string>(props.location)
	const [profession, setProfession] = useState<string>(props.profession)
	const [dob, setDob] = useState<string>(props.dob)
	const [gender, setGender] = useState<string>(props.gender)
	const [allowFollowers, setAllowFollowers] = useState<boolean>(props.allowFollowers)
	const [allowXp, setAllowXp] = useState<boolean>(props.allowXp)
	const [allowBadge, setAllowBadge] = useState<boolean>(props.allowBadge)
	const [pfp, setPfp] = useState<string>('/pfp.jpeg')
	const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
	const [isLoading, setLoading] = useState<boolean>(true)
	const [userInfo, setUserInfo] = useState({
		id,
		name,
		about,
		profession,
		dob,
		gender,
		allowFollowers,
		allowXp,
		allowBadge,
		location,
		institute
	})
	const router = useRouter()

	function Token(token: string) {
		const tokenBody = useToken(token)
		setPfp(tokenBody.pfp)
	}

	useEffect(() => {
		try {
			const token = localStorage.getItem('token') as string
			if (token) {
				setLoggedIn(true)
				Token(token)
			} else {
				router.replace('/login')
			}
		} catch {
			//do something
		}
		setLoading(false)
	}, [router])

	async function handleDelete() {
		setPfp('/pfp.jpeg')
	}

	async function UploadPfp(pfp: string) {
		const token = localStorage.getItem('token') as string
		const tokenBody = useToken(token)
		const newTokenBody = {
			email: tokenBody.email,
			password: tokenBody.password,
			pfp: pfp
		}
		const res = await fetch('/api/uploadImage', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(newTokenBody)
		})

		if (res.status == 200) {
			const newToken = await res.text()
			localStorage.setItem('token', newToken)
		}
	}

	async function handleInfo() {
		const updatedUserInfo = {
			id,
			name,
			about,
			profession,
			dob,
			gender,
			allowFollowers,
			allowXp,
			allowBadge,
			location,
			institute
		}
		const res = await fetch('/api/updateUser', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(updatedUserInfo)
		})
		setUserInfo(updatedUserInfo)
		UploadPfp(pfp)
	}

	if (isLoading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}

	return (
		<>
			{isLoggedIn && (
				<>
					<Head>
						<title>Edit Profile</title>
					</Head>

					<NavBar />
					<div className="flex p-12 justify-between sm:flex-wrap sm:px-3 sm:py-6 md:px-4 md:py-8 md:ml-2">
						<SideNav />
						<div className="w-9/12 px-20 sm:w-full sm:mt-6 sm:px-2 md:w-full md:px-6">
							<form
								onSubmit={e => {
									e.preventDefault()
									handleInfo()
								}}
							>
								<div className="flex items-center mb-8">
									<Image
										src={pfp}
										alt="Profile picture"
										width="60"
										height="60"
										className="rounded-full mr-6 sm:h-14 sm:w-14 sm:mr-2"
									/>

									<label className="mx-2 bg-indigo-600 py-2 px-5 text-white text-md rounded-lg font-medium hover:bg-indigo-700">
										<input
											type="file"
											id="profile"
											name="profile"
											className="hidden"
											onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
												const files: FileList | null = e.target.files
												if (files && files.length > 0) {
													const img: File | null = files[0] as File

													const reader = new FileReader()
													reader.readAsDataURL(img)

													reader.addEventListener('load', () => {
														const img = reader.result as string
														setPfp(img)
													})
												}
											}}
										/>
										Change
									</label>

									<SecondaryButton
										type="button"
										value="Delete"
										onClick={() => {
											handleDelete()
										}}
									></SecondaryButton>
								</div>
								<div className="flex flex-col">
									<Input
										label="Display name"
										type="text"
										id="name"
										value={name}
										className=""
										info="Name entered above will be used for all issued certificates"
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											setName(e.target.value)
										}}
									/>

									<div className="mb-3 flex flex-col">
										<label
											htmlFor="about"
											className="text-md text-gray-900 font-medium mb-1"
										>
											About
										</label>
										<textarea
											name="about"
											id="about"
											value={about}
											onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
												setAbout(e.target.value)
											}
											className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-indigo-600"
										></textarea>
									</div>
									<Input
										label="Profession"
										type="text"
										id="profession"
										value={profession}
										info=""
										className=""
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											setProfession(e.target.value)
										}}
									></Input>
									<Input
										label="Institute"
										type="text"
										id="institute"
										value={institute}
										info=""
										className=""
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											setInstitute(e.target.value)
										}}
									></Input>
									<Input
										label="Location"
										type="text"
										id="location"
										value={location}
										info=""
										className=""
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											setLocation(e.target.value)
										}}
									></Input>
									<Input
										label="Date of birth"
										type="date"
										id="dob"
										value={dob}
										info=""
										className=""
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											setDob(e.target.value)
										}}
									></Input>

									<div className="mb-6 flex flex-col">
										<label
											htmlFor="gender"
											className="text-md text-gray-900 font-medium mb-1"
										>
											Gender
										</label>
										<select
											name="gender"
											id="gender"
											value={gender}
											onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
												setGender(e.target.value)
											}
											className="border-2 border-gray-100 p-2.5 rounded-md mb-2 text-gray-900  focus:outline-indigo-600 "
										>
											<option value="">What is your gender?</option>
											<option value="female">Female</option>
											<option value="male">Male</option>
											<option value="other">Other</option>
										</select>
									</div>
									<div className="mb-6 flex flex-col mt-6">
										<h3 className="text-2xl font-bold mb-1">
											Section visibility
										</h3>
										<p className="text-md font-normal mb-1 text-gray-400">
											Select which sections and content should show on your
											profile page.
										</p>
									</div>
									<div className="mb-6 flex flex-col bg-gray-50 p-6 rounded-xl">
										<ToggleInput
											label="Followers and following"
											info="Shows your followers and the users you follow on
									codedamn"
											type="checkbox"
											name="followers"
											id="followers"
											checked={allowFollowers}
											onClick={(e: any) =>
												setAllowFollowers(allowFollowers ? false : true)
											}
										></ToggleInput>
										<ToggleInput
											label="XP"
											info="Shows the XP you have earned"
											type="checkbox"
											name="xp"
											id="xp"
											checked={allowXp}
											onClick={(e: any) => {
												setAllowXp(allowXp ? false : true)
											}}
										></ToggleInput>
										<ToggleInput
											label="Achievement badges"
											info="Shows your relative percentile and proficiency"
											type="checkbox"
											name="achievements"
											id="achievements"
											checked={allowBadge}
											onClick={(e: any) =>
												setAllowBadge(allowBadge ? false : true)
											}
										></ToggleInput>
									</div>
									<div className="mb-6 flex justify-end">
										<SecondaryButton
											type="button"
											value="Cancel"
											onClick={() => {
												router.push('/')
											}}
										></SecondaryButton>
										<PrimaryButton
											value="Save changes"
											type="submit"
											onClick={() => {
												//do something
											}}
										></PrimaryButton>
									</div>
								</div>
							</form>
						</div>
					</div>
				</>
			)}
		</>
	)
}
