import { BiPencil, BiTrashAlt } from 'react-icons/bi'
import NavBar from '../../components/NavBar'
import SideNav from '../../components/SideNav'
import Image from 'next/image'

export default function Edit_Porfolio(props: any) {
	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between">
				<SideNav />
				<div className="w-9/12 px-20">
					<div className="mb-8 w-full">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Playgrounds</h1>
							<button className="m-2 bg-indigo-600 py-1.5 px-3 text-white text-sm rounded-lg font-semibold">
								Add Education
							</button>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex mb-2 bg-gray-50 p-5 rounded-lg ">
								<Image src={'/html-logo.png'} alt={''} width="60" height="60" />
								<div className="ml-4">
									<h2 className="text-lg text-gray-900 font-semibold">
										Playground 1
									</h2>
									<h3 className="text-md text-gray-500 font-normal">HTML/CSS</h3>
									<p className=" text-gray-500 text-sm font-normal">09-1-2023</p>
								</div>
							</div>
							<div className="flex mb-2 bg-gray-50 p-5 rounded-lg ">
								<Image src={'/html-logo.png'} alt={''} width="60" height="60" />
								<div className="ml-4">
									<h2 className="text-lg text-gray-900 font-semibold">
										Playground 2
									</h2>
									<h3 className="text-md text-gray-500 font-normal">Next.Js</h3>
									<p className=" text-gray-500 text-sm font-normal">09-12-2022</p>
								</div>
							</div>
							<div>
								<div className="flex mb-2 bg-gray-50 p-5 rounded-lg ">
									<Image src={'/html-logo.png'} alt={''} width="60" height="60" />
									<div className="ml-4">
										<h2 className="text-lg text-gray-900 font-semibold">
											Playground 3
										</h2>
										<h3 className="text-md text-gray-500 font-normal">
											HTML/CSS
										</h3>
										<p className=" text-gray-500 text-sm font-normal">
											10-2-2023
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className="flex mb-2 bg-gray-50 p-5 rounded-lg ">
									<Image src={'/html-logo.png'} alt={''} width="60" height="60" />
									<div className="ml-4">
										<h2 className="text-lg text-gray-900 font-semibold">
											Playground 4
										</h2>
										<h3 className="text-md text-gray-500 font-normal">
											Next.Js
										</h3>
										<p className=" text-gray-500 text-sm font-normal">
											10-2-2023
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-8 w-full">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Projects</h1>
							<button className="m-2 bg-indigo-600 py-1.5 px-3 text-white text-sm rounded-lg font-semibold">
								Add Education
							</button>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex flex-col mb-2 bg-gray-50 p-5 rounded-lg ">
								<div>
									<Image
										src={'/project-img.png'}
										alt={''}
										width="320"
										height="100"
										className="rounded-md"
									/>
								</div>
								<div className="ml-4">
									<h2 className="text-lg text-gray-900 font-semibold">
										Playground 1
									</h2>
									<h3 className="text-md text-gray-500 font-normal">HTML/CSS</h3>
									<p className=" text-gray-500 text-sm font-normal">09-1-2023</p>
								</div>
							</div>
							<div className="flex flex-col mb-2 bg-gray-50 p-5 rounded-lg ">
								<div>
									<Image
										src={'/project-img.png'}
										alt={''}
										width="320"
										height="100"
										className="rounded-md"
									/>
								</div>
								<div className="ml-4">
									<h2 className="text-lg text-gray-900 font-semibold">
										Playground 2
									</h2>
									<h3 className="text-md text-gray-500 font-normal">Next.Js</h3>
									<p className=" text-gray-500 text-sm font-normal">09-12-2022</p>
								</div>
							</div>
							<div>
								<div className="flex flex-col mb-2 bg-gray-50 p-5 rounded-lg ">
									<div>
										<Image
											src={'/project-img.png'}
											alt={''}
											width="320"
											height="100"
											className="rounded-md"
										/>
									</div>
									<div className="ml-4">
										<h2 className="text-lg text-gray-900 font-semibold">
											Playground 3
										</h2>
										<h3 className="text-md text-gray-500 font-normal">
											HTML/CSS
										</h3>
										<p className=" text-gray-500 text-sm font-normal">
											10-2-2023
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className="flex flex-col mb-2 bg-gray-50 p-5 rounded-lg ">
									<div>
										<Image
											src={'/project-img.png'}
											alt={''}
											width="320"
											height="100"
											className="rounded-md"
										/>
									</div>
									<div className="ml-4">
										<h2 className="text-lg text-gray-900 font-semibold">
											Playground 4
										</h2>
										<h3 className="text-md text-gray-500 font-normal">
											Next.Js
										</h3>
										<p className=" text-gray-500 text-sm font-normal">
											10-2-2023
										</p>
									</div>
								</div>
							</div>
						</div>
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
			</div>
		</>
	)
}
