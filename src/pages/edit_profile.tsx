import Image from 'next/image'
import NavBar from '../../components/NavBar'
import SideNav from '../../components/SideNav'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import mongoose from 'mongoose'
import Users from '../../model/Users'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).exec()

	const props = {
		id: user.id,
		name: user.name,
		about: user.about,
		profession: user.profession,
		dob: user.dob,
		gender: user.gender,
		allowFollowers: user.allowFollowers,
		allowXp: user.allowXp,
		allowBadge: user.allowBadge
	}
	console.log(props)

	return {
		props: props
	}
}

export default function Edit_Profile(props: any) {
	const id = props.id as string
	const [name, setName] = useState<string>(props.name)
	const [about, setAbout] = useState<string>(props.about)
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
		allowBadge
	})

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
			allowBadge
		})
		const res = await fetch('/api/updateUser', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(userInfo)
		})

		const resText = await res.text()
	}

	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between">
				<p>{}</p>
				<SideNav />
				<div className="w-9/12 px-20">
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
								className="rounded-full mr-6"
							/>
							<button className="m-2 bg-indigo-600 py-2 px-5 text-white text-md rounded-lg font-medium">
								Upload new picture
							</button>
							<button className="m-2 bg-gray-100 py-2 px-5 text-gray-900 text-md rounded-lg font-medium">
								Delete
							</button>
						</div>
						<div className="flex flex-col">
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Display name
								</label>
								<input
									type="text"
									id="name"
									value={name}
									onChange={e => setName(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
								<p className="text-md font-normal text-gray-500">
									Name entered above will be used for all issued certificates
								</p>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="about" className="text-md font-medium mb-1">
									About
								</label>
								<textarea
									name="about"
									id="about"
									value={about}
									onChange={e => setAbout(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								></textarea>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="profession" className="text-md font-medium mb-1">
									Profession
								</label>
								<input
									type="text"
									id="profession"
									value={profession}
									onChange={e => setProfession(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="dob" className="text-md font-medium mb-1">
									Date of birth
								</label>
								<input
									type="date"
									id="dob"
									value={dob}
									onChange={e => setDob(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 text-gray-400 uppercase  focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="gender" className="text-md font-medium mb-1">
									Gender
								</label>
								<select
									name="gender"
									id="gender"
									value={gender}
									onChange={e => setGender(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 text-gray-400  focus:outline-none"
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
							<div className="mb-6 flex flex-col bg-gray-100 p-6 rounded-xl">
								<div className="flex justify-between mb-4">
									<div>
										<label
											htmlFor="followers"
											className="text-lg font-bold mb-1"
										>
											Followers and following
										</label>
										<p>
											Shows your followers and the users you follow on
											codedamn
										</p>
									</div>
									<div>
										<input
											type="checkbox"
											name="followers"
											id="followers"
											checked={allowFollowers}
											onChange={e =>
												setAllowFollowers(allowFollowers ? false : true)
											}
										/>
									</div>
								</div>
								<div className="flex justify-between mb-4">
									<div>
										<label htmlFor="xp" className="text-lg font-bold mb-1">
											XP
										</label>
										<p>Shows the XP you have earned</p>
									</div>
									<div>
										<input
											type="checkbox"
											name="xp"
											id="xp"
											checked={allowXp}
											onChange={e => setAllowXp(allowXp ? false : true)}
										/>
									</div>
								</div>
								<div className="flex justify-between mb-4">
									<div>
										<label
											htmlFor="achievements"
											className="text-lg font-bold mb-1"
										>
											Achievement badges
										</label>
										<p>Shows your relative percentile and proficiency</p>
									</div>
									<div>
										<input
											type="checkbox"
											name="achievements"
											id="achievements"
											checked={allowBadge}
											onChange={() =>
												setAllowBadge(allowBadge ? false : true)
											}
										/>
									</div>
								</div>
							</div>
							<div className="mb-6 flex justify-end">
								<button className="m-2 bg-gray-100 py-2 px-5 text-gray-900 text-md rounded-lg font-medium">
									Cancel
								</button>
								<button
									className="m-2 bg-indigo-600 py-2 px-5 text-white text-md rounded-lg font-medium"
									type="submit"
								>
									Save changes
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
