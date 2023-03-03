import Image from 'next/image'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import mongoose from 'mongoose'
import Users from '../model/Users'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Input from '../components/PrimaryInput'
import ToggleInput from '../components/ToggleInput'
import { useRouter } from 'next/router'

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

	async function handleInfo() {
		setUserInfo({
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
		const res = await fetch('/api/updateUser', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(userInfo)
		})
	}

	return (
		<>
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
								src="/pfp.jpeg"
								alt="Profile picture"
								width="90"
								height="90"
								className="rounded-full mr-6 sm:h-14 sm:w-14 sm:mr-2"
							/>
							<PrimaryButton
								type="button"
								value="Change"
								onClick={() => {
									//do something
								}}
							></PrimaryButton>
							<SecondaryButton
								type="button"
								value="Delete"
								onClick={() => {
									//do something
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
								<label htmlFor="about" className="text-md font-medium mb-1">
									About
								</label>
								<textarea
									name="about"
									id="about"
									value={about}
									onChange={e => setAbout(e.target.value)}
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
								<label htmlFor="gender" className="text-md font-medium mb-1">
									Gender
								</label>
								<select
									name="gender"
									id="gender"
									value={gender}
									onChange={e => setGender(e.target.value)}
									className="border-2 border-gray-100 p-2.5 rounded-md mb-2 text-gray-900  focus:outline-indigo-600 "
								>
									<option value="">What is your gender?</option>
									<option value="female">Female</option>
									<option value="male">Male</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div className="mb-6 flex flex-col mt-6">
								<h3 className="text-2xl font-bold mb-1">Section visibility</h3>
								<p className="text-md font-normal mb-1 text-gray-400">
									Select which sections and content should show on your profile
									page.
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
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										setAllowXp(allowXp ? false : true)
									}
								></ToggleInput>
								<ToggleInput
									label="Achievement badges"
									info="Shows your relative percentile and proficiency"
									type="checkbox"
									name="achievements"
									id="achievements"
									checked={allowBadge}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
	)
}
