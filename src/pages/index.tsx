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
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useToken from '../components/useToken'
import jsonwebtoken from 'jsonwebtoken'

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
		experience: user?.experience,
		cover: user?.cover
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
	cover: string
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
	const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
	const [cover, setCover] = useState<string>(props.cover)
	const [pfp, setPfp] = useState<string>('/pfp.jpeg')

	const router = useRouter()

	async function UploadCover(cover: string) {
		const newCover: { cover: string } = {
			cover
		}
		const res = await fetch('/api/updateUser', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(newCover)
		})
	}

	function CheckToken() {
		const token = localStorage.getItem('token') as string
		if (token) {
			setLoggedIn(true)
		}
		const tokenBody = useToken(token)
		setPfp(tokenBody.pfp)
	}

	useEffect(() => {
		try {
			CheckToken()
		} catch {
			//do something
		}
	}, [])

	return (
		<>
			<Head>
				<title>Profile page</title>
			</Head>
			<NavBar />
			<div className="h-full w-full flex flex-col items-center sm:px-3 sm:w-full md:w-full md:px-6">
				<div className="border-2 w-8/12 h-fit rounded-2xl border-gray-100 mt-12 sm:w-full sm:mt-6 md:w-full">
					<div>
						<div className="relative">
							<Image
								src={cover}
								alt={'Cover Image'}
								width="1000"
								height="80"
								className="rounded-t-2xl w-full h-40"
							/>
							{isLoggedIn && (
								<div className="flex items-center absolute top-5 right-7 sm:right-5 w-fit">
									<label className="px-2 py-1.5 rounded-lg border border-white border-opacity-50 flex text-base sha items-center text-white font-semibold bg-gray-300 bg-opacity-50 sm:text-sm">
										<input
											type="file"
											name="cover"
											id="cover"
											className="hidden"
											onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
												const files: FileList | null = e.target.files
												if (files && files.length > 0) {
													const img: File | null = files[0] as File

													const reader = new FileReader()
													reader.readAsDataURL(img)

													reader.addEventListener('load', () => {
														const img = reader.result as string
														UploadCover(img)
														setCover(img)
													})
												}
											}}
										/>
										<TbEdit className="h-6 w-6 mr-2 sm:h-5 sm:w-5" />
										Edit cover
									</label>
								</div>
							)}
						</div>
					</div>
					<div className="relative flex p-5 sm:flex-wrap sm:px-2 md:flex-wrap md:p-4">
						<div className="relative pl-2 -top-28 mt-2 sm:-top-40 sm:h-0 sm:pl-4 sm:mt-1 md:h-12">
							<Image
								src={pfp}
								alt={'Profile picture'}
								width="200"
								height="200"
								className="rounded-full border-2 border-white sm:h-28 sm:w-28 md:h-36 md:w-36"
							/>
						</div>
						<div className="pl-6 w-full sm:pl-0 md:pl-2">
							<div className="flex items-center mb-2 sm:flex-wrap sm:pl-2 md:flex-wrap flex-wrap">
								<h1 className="text-3xl font-bold mr-3">{name}</h1>
								<p className="bg-lime-300 text-lime-900 pr-2 pl-2 rounded-md text-md font-semibold mr-3 sm:mt-1">
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
								<div className="flex sm:flex-wrap sm:mt-1 sm:pl-2">
									{github && (
										<Link legacyBehavior href={github}>
											<a target="_blank" rel="noopener noreferrer">
												<Image
													src="/github.svg"
													alt="Github-icon"
													width="40"
													height="40"
													className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4"
												/>
											</a>
										</Link>
									)}
									{youtube && (
										<Link legacyBehavior href={youtube}>
											<a target="_blank" rel="noopener noreferrer">
												<Image
													src="/youtube-icon.svg"
													alt="Youtube-icon"
													width="40"
													height="40"
													className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4"
												/>
											</a>
										</Link>
									)}
									{instagram && (
										<Link legacyBehavior href="/">
											<a target="_blank" rel="noopener noreferrer">
												<Image
													src="/instagram-icon.svg"
													alt="instagram-icon"
													width="40"
													height="40"
													className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
												/>
											</a>
										</Link>
									)}
									{behance && (
										<Link legacyBehavior href="/">
											<a target="_blank" rel="noopener noreferrer">
												<Image
													src="/behance-icon.svg"
													alt="behance-icon"
													width="40"
													height="40"
													className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
												/>
											</a>
										</Link>
									)}
									{dribbble && (
										<Link legacyBehavior href="/">
											<a target="_blank" rel="noopener noreferrer">
												<Image
													src="/dribbble-icon.svg"
													alt="dribbble-icon"
													width="40"
													height="40"
													className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
												/>
											</a>
										</Link>
									)}
									{facebook && (
										<Link legacyBehavior href="/">
											<a target="_blank" rel="noopener noreferrer">
												<Image
													src="/facebook-icon.svg"
													alt="facebook-icon"
													width="40"
													height="40"
													className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
												/>
											</a>
										</Link>
									)}
								</div>
								<div className="flex sm:mt-1 sm:pl-2 sm:items-end">
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
