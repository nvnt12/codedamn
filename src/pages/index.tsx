import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/NavBar'
import { HiOutlineBookmark } from 'react-icons/hi'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import mongoose from 'mongoose'
import Users from '../../model/Users'
import { TbEdit } from 'react-icons/tb'
import PrimaryButton from '../../components/PrimaryButton'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).exec()

	const props = {
		name: user?.name,
		profession: user?.profession,
		institute: user?.institute,
		skills: user?.skills,
		location: user?.location,
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

export default function Home(props: any) {
	const name: string = props.name
	const profession: string = props.profession
	const institute: string = props.institute
	const skills: any = props.skills.split(',')
	const location: string = props.location
	const github: string = props.github
	const youtube: string = props.youtube
	const facebook: string = props.facebook
	const dribbble: string = props.dribbble
	const behance: string = props.behance
	const instagram: string = props.instagram

	return (
		<>
			<NavBar />
			<div className="h-full w-full flex flex-col items-center">
				<div className="border-2 w-8/12 h-fit rounded-2xl border-gray-100 mt-12">
					<div>
						<div className="relative">
							<Image
								src={'/cover.jpg'}
								alt={'Cover Image'}
								width="1000"
								height="60"
								className="rounded-t-2xl w-full h-40"
							/>
							<div className="flex items-center absolute top-5 right-7  w-fit">
								<button
									className="px-2 py-1.5 rounded-lg border border-white border-opacity-50 flex text-md items-center text-white font-semibold bg-white bg-opacity-20
								"
								>
									<TbEdit className="h-6 w-6 mr-2" />
									Edit cover
								</button>
							</div>
						</div>
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
						<div className="pl-6 w-full">
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
								<p className="text-lg text-gray-500 font-normal">{institute}</p>
							</div>
							<div>
								<p className="text-lg text-gray-400 font-normal">{location}</p>
							</div>
							<div className="pt-10 pb-10">
								<ul className="flex flex-wrap">
									{skills.map((skill: string) => (
										<li
											key={Math.random()}
											className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-md font-semibold mr-3 mb-4"
										>
											{skill}
										</li>
									))}
								</ul>
							</div>

							<div className="flex justify-between pt-10 pb-4 border-t-2 border-gray-100">
								<div className="flex flex-wrap">
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
												src="/facebook-official.svg"
												alt="facebook-official"
												width="40"
												height="40"
												className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 mr-4"
											/>
										</Link>
									)}
								</div>
								<div className="flex">
									<HiOutlineBookmark className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2  mr-4" />
									<PrimaryButton value="Contact" type="button"></PrimaryButton>
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
