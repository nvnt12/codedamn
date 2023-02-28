import mongoose from 'mongoose'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import Users from '../model/Users'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Input from '../components/PrimaryInput'
import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).lean()

	const props = {
		github: user?.github,
		youtube: user?.youtube,
		instagram: user?.instagram,
		facebook: user?.facebook,
		behance: user?.behance,
		dribbble: user?.dribbble
	}

	return {
		props: props,
		revalidate: 10
	}
}

export default function Edit_Socials(props: {
	github: string
	youtube: string
	instagram: string
	facebook: string
	behance: string
	dribbble: string
}) {
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
	const router = useRouter()

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
							<Input
								label="Github"
								type="text"
								info=""
								className=""
								id="github"
								value={github}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setGithub(e.target.value)
								}
							></Input>
							<Input
								label="Youtube"
								type="text"
								info=""
								className=""
								id="youtube"
								value={youtube}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setYoutube(e.target.value)
								}
							></Input>
							<Input
								label="Instagram"
								type="text"
								info=""
								className=""
								id="instagram"
								value={instagram}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setInstagram(e.target.value)
								}
							></Input>
							<Input
								label="Facebook"
								type="text"
								info=""
								className=""
								id="facebook"
								value={facebook}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setFacebook(e.target.value)
								}
							></Input>
							<Input
								label="Behance"
								type="text"
								info=""
								className=""
								id="behance"
								value={behance}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setBehance(e.target.value)
								}
							></Input>
							<Input
								label="Dribbble"
								type="text"
								info=""
								className=""
								id="dribble"
								value={dribbble}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setDribbble(e.target.value)
								}
							></Input>

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
