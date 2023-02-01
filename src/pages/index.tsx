import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/NavBar'
import { BsFillLightningChargeFill } from 'react-icons/bs'

export default function Home() {
	return (
		<>
			<NavBar />
			<div className="h-full w-full flex justify-center">
				<div className="border-2 w-8/12 h-fit rounded-3xl border-gray-100 mt-12">
					<div>
						<Image
							src={'/cover.jpg'}
							alt={'Cover Image'}
							width="1000"
							height="40"
							className="rounded-t-3xl"
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
								<h1 className="text-3xl font-bold mr-3">Anna Cheng</h1>
								<p className="bg-green-400 pr-2 pl-2 rounded-md text-md font-semibold mr-3 itrms-">
									Pro
								</p>
								<p className="bg-blue-200 pr-2 pl-2 rounded-md text-md font-semibold text-blue-800">
									Looking for job
								</p>
							</div>
							<div className="flex items-center">
								<p className="text-lg text-gray-500 font-normal">Profession</p>
								<span className="text-lg text-gray-500 font-normal mr-2 ml-2">
									|
								</span>
								<p className="text-lg text-gray-500 font-normal">College</p>
							</div>
							<div>
								<p className="text-md text-gray-400 font-normal">Mumbai, India</p>
							</div>
							<div className="pt-10 pb-10">
								<ul className="flex">
									<li className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-lg font-semibold mr-3 ">
										skills
									</li>
									<li className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-lg font-semibold mr-3 ">
										skills
									</li>
									<li className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-lg font-semibold mr-3 ">
										skills
									</li>
									<li className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-lg font-semibold mr-3 ">
										skills
									</li>
									<li className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-lg font-semibold mr-3 ">
										skills
									</li>
									<li className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-lg font-semibold mr-3 ">
										skills
									</li>
									<li className="bg-gray-100 pr-4 pl-4 pt-1 pb-1 rounded-md text-lg font-semibold mr-3 ">
										skills
									</li>
								</ul>
							</div>

							<div className="flex justify-between pt-10 pb-4 border-t-2 border-gray-100">
								<div className="flex">
									<BsFillLightningChargeFill className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4" />
									<BsFillLightningChargeFill className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4" />
									<BsFillLightningChargeFill className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4" />
									<BsFillLightningChargeFill className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4" />
								</div>
								<div className="flex">
									<BsFillLightningChargeFill className="border-2 border-gray-100 rounded-lg w-10 h-10 p-2 fill-cyan-600 mr-4" />
									<button className="w-fit h-10 bg-indigo-600 text-white text-md font-semibold pr-3 pl-3 rounded-lg">
										Contact
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
