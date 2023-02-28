import mongoose from 'mongoose'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Card from './Card'
import Users from '../model/Users'
import { useState } from 'react'

export default function Portfolio(props: {
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
	const [projects, setProjects] = useState(
		props.projects.filter((project: { selected: boolean }) => project.selected == true)
	)
	const [playgrounds, setPlaygrounds] = useState(
		props.playgrounds.filter((playground: { selected: boolean }) => playground.selected == true)
	)
	return (
		<>
			<div className="w-8/12 h-fit mt-12 mb-12">
				<div className="mb-6">
					<h1 className="font-bold text-2xl">Stats</h1>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex mb-2 bg-gray-50 p-4 rounded-lg border-2 border-gray-100">
						<div>
							<Image
								src="/Lightning.svg"
								alt="Streak"
								width="50"
								height="50"
								className="rounded-md"
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-xl text-gray-900 font-bold">2</h2>
							<div className="flex justify-between">
								<h3 className="text-md text-gray-500 font-normal">
									Longest streak
								</h3>
							</div>
						</div>
					</div>

					<div className="flex mb-2 bg-gray-50 p-4 rounded-lg border-2 border-gray-100">
						<div>
							<Image
								src="/StarFour.svg"
								alt="Streak"
								width="50"
								height="50"
								className="rounded-md"
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-xl text-gray-900 font-bold">1200</h2>
							<div className="flex justify-between">
								<h3 className="text-md text-gray-500 font-normal">
									Experience points
								</h3>
							</div>
						</div>
					</div>

					<div className="flex mb-2 bg-gray-50 p-4 rounded-lg border-2 border-gray-100">
						<div>
							<Image
								src="/cup.svg"
								alt="Streak"
								width="50"
								height="50"
								className="rounded-md"
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-xl text-gray-900 font-bold">Novice</h2>
							<div className="flex justify-between">
								<h3 className="text-md text-gray-500 font-normal">
									Current league
								</h3>
							</div>
						</div>
					</div>

					<div className="flex mb-2 bg-gray-50 p-4 rounded-lg border-2 border-gray-100">
						<div>
							<Image
								src="/Heartbeat.svg"
								alt="Streak"
								width="50"
								height="50"
								className="rounded-md"
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-xl text-gray-900 font-bold">120</h2>
							<div className="flex justify-between">
								<h3 className="text-md text-gray-500 font-normal">Karma points</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-8/12 h-fit mt-12 mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Projects</h1>
					</div>
					<div className="grid grid-cols-2 gap-4">
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
									className="rounded-lg border-2 border-gray-100"
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
			</div>

			<div className="w-8/12 h-fit mt-12 mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Playgrounds</h1>
					</div>
					<div className="grid grid-cols-2 gap-4">
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
									className="rounded-lg border-2 border-gray-100"
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
			</div>
		</>
	)
}
