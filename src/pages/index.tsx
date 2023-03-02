import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import { HiOutlineBookmark } from 'react-icons/hi'
import { BiMap } from 'react-icons/bi'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import mongoose from 'mongoose'
import Users from '../model/Users'
import { TbEdit } from 'react-icons/tb'
import PrimaryButton from '../components/PrimaryButton'
import Portfolio from '../components/Porfolio'
import Resume from '../components/Resume'
import { useState } from 'react'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).lean()

	const prop = JSON.stringify({
		name: user?.name,
		about: user?.about,
		profession: user?.profession,
		institute: user?.institute,
		skills: user?.skills,
		location: user?.location,
		github: user?.github,
		youtube: user?.youtube,
		instagram: user?.instagram,
		facebook: user?.facebook,
		behance: user?.behance,
		dribbble: user?.dribbble,
		projects: user?.projects,
		playgrounds: user?.playgrounds,
		interests: user?.interests,
		education: user?.education,
		experience: user?.experience
	})
	const props = JSON.parse(prop)

	return {
		props: props,
		revalidate: 10
	}
}

export default function Home(props: {
	name: string
	about: string
	profession: string
	location: string
	institute: string
	skills: [
		{
			index: number
			skill: string
			rate: string
		}
	]
	github: string
	youtube: string
	instagram: string
	facebook: string
	behance: string
	dribbble: string
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
	interests: string[]
	education: [
		{
			index: number
			degree: string
			college: string
			start: string
			end: string
			img: string
			desc: string
		}
	]
	experience: [
		{
			index: number
			role: string
			location: string
			start: string
			end: string
			desc: string
			organisation: string
			img: string
		}
	]
}) {
	const name: string = props.name
	const profession: string = props.profession
	const institute: string = props.institute
	const skills = props.skills
	const location: string = props.location
	const github: string = props.github
	const youtube: string = props.youtube
	const facebook: string = props.facebook
	const dribbble: string = props.dribbble
	const behance: string = props.behance
	const instagram: string = props.instagram
	const [portfolio, setPortfolio] = useState<boolean>(true)
	const [resume, setResume] = useState<boolean>(false)

	return (
		<>
			<NavBar />
			<div className="h-full w-full flex flex-col items-center sm:px-3 sm:w-full md:w-full md:px-6">
				<div className="border-2 w-8/12 h-fit rounded-2xl border-gray-100 mt-12 sm:w-full sm:mt-6 md:w-full">
					<div>
						<div className="relative">
							<Image
								src={'/cover.jpg'}
								alt={'Cover Image'}
								width="1000"
								height="80"
								className="rounded-t-2xl w-full h-40"
							/>
							<div className="flex items-center absolute top-5 right-7 sm:right-5 w-fit">
								<button
									className="px-2 py-1.5 rounded-lg border border-white border-opacity-50 flex text-base items-center text-white font-semibold bg-white bg-opacity-20 sm:text-sm
								"
								>
									<TbEdit className="h-6 w-6 mr-2 sm:h-5 sm:w-5" />
									Edit cover
								</button>
							</div>
						</div>
					</div>
					<div className="relative flex p-5 sm:flex-wrap sm:px-2 md:flex-wrap md:p-4">
						<div className="relative pl-2 -top-28 mt-2 sm:-top-40 sm:h-0 sm:pl-4 sm:mt-1 md:h-12">
							<Image
								src={'/pfp.jpeg'}
								alt={'Profile picture'}
								width="200"
								height="200"
								className="rounded-full border-2 border-white sm:h-28 sm:w-28 md:h-36 md:w-36"
							/>
						</div>
						<div className="pl-6 w-full sm:pl-0 md:pl-2">
							<div className="flex items-center mb-2 sm:flex-wrap sm:pl-2 md:flex-wrap flex-wrap">
								<h1 className="text-3xl font-bold mr-3">{name}</h1>
								<p className="bg-lime-300 pr-2 pl-2 rounded-md text-md font-semibold mr-3 sm:mt-1">
									Pro
								</p>
								<p className="bg-sky-100 pr-2 pl-2 rounded-md text-md font-semibold text-sky-800 sm:mt-1 md:mt-1">
									Looking for job
								</p>
							</div>
							<div className="flex items-center sm:pl-2">
								<p className="text-lg text-gray-500 font-normal">{profession}</p>
								<span className="text-lg text-gray-500 font-normal mr-2 ml-2">
									|
								</span>
								<p className="text-lg text-gray-500 font-normal">{institute}</p>
							</div>
							<div className="flex items-center sm:pl-2">
								<BiMap className="h-5 w-5 fill-gray-400 mr-1" />
								<p className="text-lg text-gray-400 font-normal">{location}</p>
							</div>
							<div className="pt-10 pb-10 sm:pt-4 sm:pb-4 sm:pl-2">
								<ul className="flex flex-wrap">
									{skills.map(
										(skill: { index: number; skill: string; rate: string }) => (
											<li
												key={skill.skill}
												className="bg-gray-100 pr-4 pl-4 pt-1.5 pb-1.5 rounded-md text-md font-semibold mr-3 mb-4"
											>
												{skill.skill}
											</li>
										)
									)}
								</ul>
							</div>

							<div className="flex justify-between pt-10 pb-4 border-t-2 border-gray-100 sm:pt-3 sm:pb-0 sm:flex-wrap items-center">
								<div className="flex flex-wrap sm:mt-1 sm:pl-2">
									{github && (
										<Link href={github}>
											<Image
												src="/github.svg"
												alt="Github-icon"
												width="40"
												height="40"
												className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4"
											/>
										</Link>
									)}
									{youtube && (
										<Link href={youtube}>
											<Image
												src="/youtube-icon.svg"
												alt="Youtube-icon"
												width="40"
												height="40"
												className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4"
											/>
										</Link>
									)}

									{instagram && (
										<Link href="/">
											<Image
												src="/instagram-icon.svg"
												alt="instagram-icon"
												width="40"
												height="40"
												className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
											/>
										</Link>
									)}
									{behance && (
										<Link href="/">
											<Image
												src="/behance-icon.svg"
												alt="behance-icon"
												width="40"
												height="40"
												className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
											/>
										</Link>
									)}
									{dribbble && (
										<Link href="/">
											<Image
												src="/dribbble-icon.svg"
												alt="dribbble-icon"
												width="40"
												height="40"
												className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
											/>
										</Link>
									)}
									{facebook && (
										<Link href="/">
											<Image
												src="/facebook-icon.svg"
												alt="facebook-icon"
												width="40"
												height="40"
												className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
											/>
										</Link>
									)}
								</div>
								<div className="flex sm:mt-1">
									<HiOutlineBookmark className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4 sm:mr-2" />
									<PrimaryButton
										value="Contact"
										type="button"
										onClick={() => {
											//contact
										}}
									></PrimaryButton>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-2 w-8/12 h-fit rounded-2xl border-gray-100 mt-12 pr-4 pl-4 pt-3 pb-3 sm:w-full sm:mt-6 md:w-full">
					<button
						className={`${
							portfolio == true
								? 'w-20 h-8 bg-indigo-100 text-indigo-500 text-sm font-semibold pr-3 pl-3 rounded-lg mr-4'
								: 'w-20 h-8 bg-gray-100 text-gray-500 text-sm font-semibold pr-3 pl-3 rounded-lg mr-4'
						} `}
						onClick={() => {
							setPortfolio(true)
							setResume(false)
						}}
					>
						Portfolio
					</button>
					<button
						className={`${
							resume == true
								? 'w-20 h-8 bg-indigo-100 text-indigo-500 text-sm font-semibold pr-3 pl-3 rounded-lg mr-4'
								: 'w-20 h-8 bg-gray-100 text-gray-500 text-sm font-semibold pr-3 pl-3 rounded-lg mr-4'
						} `}
						onClick={() => {
							setResume(true)
							setPortfolio(false)
						}}
					>
						Resume
					</button>
				</div>

				<div className="w-8/12 h-fit sm:w-full md:w-full">
					{portfolio && (
						<Portfolio playgrounds={props.playgrounds} projects={props.projects} />
					)}

					{resume && (
						<Resume
							about={props.about}
							skills={props.skills}
							education={props.education}
							experience={props.experience}
							interests={props.interests}
						/>
					)}
				</div>
			</div>
		</>
	)
}
