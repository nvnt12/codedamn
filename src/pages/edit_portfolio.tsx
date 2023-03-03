import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Card from '../components/Card'
import mongoose from 'mongoose'
import { GetStaticProps } from 'next'
import Users from '../model/Users'
import { MouseEventHandler, useState } from 'react'
import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).lean()

	const prop = JSON.stringify({
		id: user?.id,
		projects: user?.projects,
		playgrounds: user?.playgrounds
	})
	const props = JSON.parse(prop)

	return {
		props: props,
		revalidate: 10
	}
}

export default function Edit_Porfolio(props: {
	id: string
	playgrounds: [
		{
			title: string
			type: string
			src: string
			alt: string
			selected: boolean
			language: string
			date: string
		}
	]
	projects: [
		{
			title: string
			type: string
			src: string
			alt: string
			selected: boolean
			language: string
			date: string
		}
	]
}) {
	const [projects, setProjects] = useState<
		{
			title: string
			type: string
			src: string
			alt: string
			selected: boolean
			language: string
			date: string
		}[]
	>(props.projects)
	const [playgrounds, setPlaygrounds] = useState<
		{
			title: string
			type: string
			src: string
			alt: string
			selected: boolean
			language: string
			date: string
		}[]
	>(props.playgrounds)
	const router = useRouter()
	const id: string = props.id

	async function handleSubmit() {
		const res = await fetch('/api/updateUser', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ id, playgrounds, projects })
		})
	}

	function handleClick(item: {
		title: string
		type: string
		src: string
		alt: string
		selected: boolean
		language: string
		date: string
	}) {
		if (item.type == 'playground') {
			setPlaygrounds(
				playgrounds.map(pg =>
					pg.title == item.title
						? { ...item, selected: item.selected ? false : true }
						: pg
				)
			)
		}
		if (item.type == 'project') {
			setProjects(
				projects.map(pj =>
					pj.title == item.title
						? { ...item, selected: item.selected ? false : true }
						: pj
				)
			)
		}
	}
	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between sm:flex-wrap sm:px-3 sm:py-6 md:px-4 md:py-8 md:ml-2">
				<SideNav />
				<div className="w-9/12 px-20 sm:w-full sm:mt-6 sm:px-2 md:w-full md:px-6">
					<div className="mb-8 w-full">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Playgrounds</h1>
						</div>
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-3">
							{playgrounds.map(
								(playground: {
									title: string
									type: string
									src: string
									alt: string
									selected: boolean
									language: string
									date: string
								}) => (
									<div
										key={playground.title}
										className={`${
											playground.selected == true
												? 'rounded-lg border-2 border-indigo-400'
												: 'rounded-lg border-2 border-gray-100'
										} `}
										onClick={() => {
											handleClick(playground)
										}}
									>
										<div>
											<Card
												type={playground.type}
												src={playground.src}
												alt={playground.alt}
												title={playground.title}
												lang={playground.language}
												date={playground.date}
												selected={playground.selected}
											/>
										</div>
									</div>
								)
							)}
						</div>
					</div>
					<div className="mb-8 w-full">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Projects</h1>
						</div>
						<div className="grid grid-cols-2 gap-4  sm:grid-cols-1 sm:gap-3">
							{projects.map(
								(project: {
									title: string
									type: string
									src: string
									alt: string
									selected: boolean
									language: string
									date: string
								}) => (
									<div
										key={project.title}
										className={`${
											project.selected == true
												? 'rounded-lg border-2 border-indigo-400'
												: 'rounded-lg border-2 border-gray-100'
										} `}
										onClick={() => {
											handleClick(project)
										}}
									>
										<Card
											type={project.type}
											src={project.src}
											alt={project.alt}
											title={project.title}
											lang={project.language}
											date={project.date}
											selected={project.selected}
										/>
									</div>
								)
							)}
						</div>
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
							type="button"
							onClick={() => {
								handleSubmit()
							}}
						></PrimaryButton>
					</div>
				</div>
			</div>
		</>
	)
}
