import { useState } from 'react'
import NavBar from '../../components/NavBar'
import SideNav from '../../components/SideNav'
import { BiPencil, BiTrashAlt } from 'react-icons/bi'

export default function Edit_Resume() {
	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between">
				<SideNav />
				<div className="w-9/12 px-20">
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Education</h1>
							<button className="m-2 bg-indigo-600 py-1.5 px-3 text-white text-sm rounded-lg font-semibold">
								Add Education
							</button>
						</div>
						<div className="bg-gray-50 p-5 rounded-lg flex  flex-col justify-between">
							<div className="flex justify-between mb-6">
								<div>
									<h2 className="text-lg text-gray-900 font-semibold">
										Bachelor of Computer
									</h2>
									<h3 className="text-md text-gray-500 font-normal">
										Mulund College of Commerce
									</h3>
									<p className=" text-gray-500 text-sm font-normal">
										2020<span>-</span>2023
									</p>
								</div>
								<div>
									<button>
										<BiPencil className="h-5 w-5 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-5 w-5 fill-gray-500" />
									</button>
								</div>
							</div>
							<div className="flex justify-between mb-6">
								<div>
									<h2 className="text-lg text-gray-900 font-semibold">
										Bachelor of Computer
									</h2>
									<h3 className="text-md text-gray-500 font-normal">
										Mulund College of Commerce
									</h3>
									<p className=" text-gray-500 text-sm font-normal">
										2020<span>-</span>2023
									</p>
								</div>
								<div>
									<button>
										<BiPencil className="h-5 w-5 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-5 w-5 fill-gray-500" />
									</button>
								</div>
							</div>
							<div className="flex justify-between mb-6">
								<div>
									<h2 className="text-lg text-gray-900 font-semibold">
										Bachelor of Computer
									</h2>
									<h3 className="text-md text-gray-500 font-normal">
										Mulund College of Commerce
									</h3>
									<p className=" text-gray-500 text-sm font-normal">
										2020<span>-</span>2023
									</p>
								</div>
								<div>
									<button>
										<BiPencil className="h-5 w-5 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-5 w-5 fill-gray-500" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Work Experience</h1>
							<button className="m-2 bg-indigo-600 py-1.5 px-3 text-white text-sm rounded-lg font-semibold">
								Add Experience
							</button>
						</div>
						<div className="bg-gray-50 p-5 rounded-lg flex  flex-col justify-between">
							<div className="flex justify-between mb-6">
								<div>
									<h2 className="text-lg text-gray-900 font-semibold">
										Jr. Frontend Developer at Tcs
									</h2>
									<h3 className="text-md text-gray-500 font-normal">Mumbai</h3>
									<p className=" text-gray-500 text-sm font-normal">
										2020<span>-</span>2023
									</p>
								</div>
								<div>
									<button>
										<BiPencil className="h-5 w-5 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-5 w-5 fill-gray-500" />
									</button>
								</div>
							</div>
							<div className="flex justify-between mb-6">
								<div>
									<h2 className="text-lg text-gray-900 font-semibold">
										Jr. Frontend Developer at Meta
									</h2>
									<h3 className="text-md text-gray-500 font-normal">Delhi</h3>
									<p className=" text-gray-500 text-sm font-normal">
										2020<span>-</span>2023
									</p>
								</div>
								<div>
									<button>
										<BiPencil className="h-5 w-5 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-5 w-5 fill-gray-500" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Skills</h1>
							<button className="m-2 bg-indigo-600 py-1.5 px-3 text-white text-sm rounded-lg font-semibold">
								Add Skill
							</button>
						</div>
						<div className="bg-gray-50 p-5 rounded-lg flex-col">
							<div className="flex justify-between ">
								<div>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										HTML 5
									</h2>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										CSS 3
									</h2>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										Javascript
									</h2>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										React
									</h2>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										Python
									</h2>
								</div>
								<div>
									<button>
										<BiPencil className="h-5 w-5 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-5 w-5 fill-gray-500" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-2xl">Interests</h1>
							<button className="m-2 bg-indigo-600 py-1.5 px-3 text-white text-sm rounded-lg font-semibold">
								Add Interest
							</button>
						</div>
						<div className="bg-gray-50 p-5 rounded-lg flex-col">
							<div className="flex justify-between ">
								<div>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										Semantics
									</h2>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										TED talks
									</h2>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										Udemy
									</h2>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										Behavioural
									</h2>
									<h2 className="text-md mb-1 text-gray-900 font-semibold">
										Economic
									</h2>
								</div>
								<div>
									<button>
										<BiPencil className="h-5 w-5 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-5 w-5 fill-gray-500" />
									</button>
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
