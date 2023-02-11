import mongoose from 'mongoose'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import NavBar from '../../components/NavBar'
import SideNav from '../../components/SideNav'
import Users from '../../model/Users'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).exec()

	const props = {
		github: user.github,
		youtube: user.youtube,
		instagram: user.instagram,
		facebook: user.facebook,
		behance: user.behance,
		dribbble: user.dribbble
	}
	console.log(props)

	return {
		props: props
	}
}

export default function Edit_Socials(props: any) {
	const [github, setGithub] = useState<string>(props.github)
	const [youtube, setYoutube] = useState<string>(props.youtube)
	const [instagram, setInstagram] = useState<string>(props.instagram)
	const [facebook, setFacebook] = useState<string>(props.facebook)
	const [behance, setBehance] = useState<string>(props.behance)
	const [dribbble, setDribbble] = useState<string>(props.dribbble)
	const [links, setLinks] = useState({
		github,
		youtube,
		instagram,
		facebook,
		behance,
		dribbble
	})

	async function handleLinks() {
		setLinks({
			github,
			youtube,
			facebook,
			instagram,
			behance,
			dribbble
		})
		const res = await fetch('/api/updateUser', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(links)
		})

		const resText = await res.text()
	}

	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between">
				<SideNav />
				<div className="w-9/12 px-20">
					<form
						onSubmit={e => {
							e.preventDefault()
							handleLinks()
						}}
						className=""
					>
						<div className="flex flex-col">
							<div className="mb-6 flex flex-col">
								<label htmlFor="github" className="text-md font-medium mb-1">
									Github
								</label>
								<input
									type="text"
									id="github"
									value={github}
									onChange={e => setGithub(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="youtube" className="text-md font-medium mb-1">
									Youtube
								</label>
								<input
									type="text"
									id="youtube"
									value={youtube}
									onChange={e => setYoutube(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="instragram" className="text-md font-medium mb-1">
									Instagram
								</label>
								<input
									type="text"
									id="instagram"
									value={instagram}
									onChange={e => setInstagram(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="facebook" className="text-md font-medium mb-1">
									Facebook
								</label>
								<input
									type="text"
									id="facebook"
									value={facebook}
									onChange={e => setFacebook(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="behance" className="text-md font-medium mb-1">
									Behance
								</label>
								<input
									type="text"
									id="behance"
									value={behance}
									onChange={e => setBehance(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="dribble" className="text-md font-medium mb-1">
									Dribbble
								</label>
								<input
									type="text"
									id="dribble"
									value={dribbble}
									onChange={e => setDribbble(e.target.value)}
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
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
