import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/NavBar'
import { HiOutlineBookmark } from 'react-icons/hi'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
	const [name, setName] = useState<string>('Navneet Chadha')
	const [profession, setProfession] = useState<string>('Student')
	const [education, setEducation] = useState<string>(`University of Mumbai'23"`)
	const [skills, setSkills] = useState([
		'Html 5',
		'CSS 3',
		'Javascript',
		'React',
		'Java',
		'Javascript',
		'React',
		'Java'
	])
	const [location, setLocation] = useState<string>('Mumbai, India')
	return (
		<>
			<NavBar />
			<div className="h-full w-full flex flex-col items-center">
				<div className="border-2 w-8/12 h-fit rounded-2xl border-gray-100 mt-12">
					<div>
						<Image
							src={'/cover.jpg'}
							alt={'Cover Image'}
							width="1000"
							height="40"
							className="rounded-t-2xl"
						/>
					</div>
					<div className="relative flex p-6">
						<div className="relative -top-24">
							<Image
								src={'/pfp.jpeg'}
								alt={'Profile picture'}
								width="160"
								height="160"
								className="rounded-full border-2 border-white -top-6"
							/>
						</div>
						<div className="pl-6">
							<div className="flex items-center mb-2">
								<h1 className="text-3xl font-bold mr-3">{name}</h1>
								<p className="bg-green-400 pr-2 pl-2 rounded-md text-md font-semibold mr-3">
									Pro
								</p>
								<p className="bg-blue-200 pr-2 pl-2 rounded-md text-md font-semibold text-blue-800">
									Looking for job
								</p>
							</div>
							<div className="flex items-center">
								<p className="text-lg text-gray-500 font-normal">{profession}</p>
								<span className="text-lg text-gray-500 font-normal mr-2 ml-2">
									|
								</span>
								<p className="text-lg text-gray-500 font-normal">{education}</p>
							</div>
							<div>
								<p className="text-lg text-gray-400 font-normal">{location}</p>
							</div>
							<div className="pt-10 pb-10">
								<ul className="flex flex-wrap">
									{skills.map(skill => (
										<li
											key={skill}
											className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-md font-semibold mr-3 mb-4"
										>
											{skill}
										</li>
									))}
								</ul>
							</div>

							<div className="flex justify-between pt-10 pb-4 border-t-2 border-gray-100">
								<div className="flex flex-wrap">
									<Link href="/">
										<Image
											src="/youtube-icon.svg"
											alt="Youtube-icon"
											width="40"
											height="40"
											className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4"
										/>
									</Link>
									<Link href="/">
										<Image
											src="/instagram-icon.svg"
											alt="instagram-icon"
											width="40"
											height="40"
											className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
										/>
									</Link>
									<Link href="/">
										<Image
											src="/behance-icon.svg"
											alt="behance-icon"
											width="40"
											height="40"
											className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
										/>
									</Link>
									<Link href="/">
										<Image
											src="/dribbble-icon.svg"
											alt="dribbble-icon"
											width="40"
											height="40"
											className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
										/>
									</Link>
									<Link href="/">
										<Image
											src="/facebook-official.svg"
											alt="facebook-official"
											width="40"
											height="40"
											className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
										/>
									</Link>
								</div>
								<div className="flex">
									<HiOutlineBookmark className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2  mr-4" />
									<button className="w-fit h-10 bg-indigo-600 text-white text-md font-semibold pr-3 pl-3 rounded-lg">
										Contact
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-2 w-8/12 h-fit rounded-2xl border-gray-100 mt-12 pr-4 pl-4 pt-3 pb-3">
					<button className="w-20 h-8 bg-indigo-100 text-indigo-500 text-sm font-semibold pr-3 pl-3 rounded-lg mr-4">
						Portfolio
					</button>
					<button className="w-20 h-8 bg-gray-100 text-gray-500 text-sm font-semibold pr-3 pl-3 rounded-lg mr-4">
						Resume
					</button>
				</div>
			</div>
		</>
	)
}
