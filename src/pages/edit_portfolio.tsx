import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Card from '../components/Card'
import mongoose from 'mongoose'
import { GetStaticProps } from 'next'
import Users from '../model/Users'
import { useState } from 'react'
import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).lean()

	const props = {
		id: user?.id,
		projects: user?.projects,
		playgrounds: user?.playgrounds
	}

	return {
		props: props,
		revalidate: 10
	}
}

export default function Edit_Porfolio(props: {
	playgrounds: [
		{
			index: number
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
			index: number
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
	const [projects, setProjects] = useState(props.projects)
	const [playgrounds, setPlaygrounds] = useState(props.playgrounds)
	const router = useRouter()

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
									index: number
									title: string
									type: string
									src: string
									alt: string
									selected: boolean
									language: string
									date: string
								}) => (
									<div
										key={playground.index}
										className={`${
											playground.selected == true
												? 'rounded-lg border border-indigo-600'
												: 'rounded-lg border-2 border-gray-100'
										} `}
									>
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
									index: number
									title: string
									type: string
									src: string
									alt: string
									selected: boolean
									language: string
									date: string
								}) => (
									<div
										key={project.index}
										className={`${
											project.selected == true
												? 'rounded-lg border border-indigo-600'
												: 'rounded-lg border-2 border-gray-100'
										} `}
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
							type="submit"
							onClick={() => {
								//save changes
							}}
						></PrimaryButton>
					</div>
				</div>
			</div>
		</>
	)
}
