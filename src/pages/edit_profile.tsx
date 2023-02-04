import Image from 'next/image'
import NavBar from '../../components/NavBar'
import { AiOutlineChrome } from 'react-icons/ai'
import SideNav from '../../components/SideNav'

export default function Edit_Profile() {
	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between">
				<SideNav />
				<div className="w-9/12 px-20">
					<form action="" className="">
						<div className="flex items-center mb-8">
							<Image
								src="/pfp.jpeg"
								alt="Profile picture"
								width="90"
								height="90"
								className="rounded-full mr-6"
							/>
							<button className="m-2 bg-indigo-600 py-2 px-5 text-white text-md rounded-lg font-medium">
								Upload new picture
							</button>
							<button className="m-2 bg-gray-100 py-2 px-5 text-gray-900 text-md rounded-lg font-medium">
								Delete
							</button>
						</div>
						<div className="flex flex-col">
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Display name
								</label>
								<input
									type="text"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
								<p className="text-md font-normal text-gray-500">
									Name entered above will be used for all issued certificates
								</p>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									About
								</label>
								<textarea
									name=""
									id=""
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								></textarea>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Profession
								</label>
								<input
									type="text"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Date of birth
								</label>
								<input
									type="date"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 text-gray-400 uppercase  focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Gender
								</label>
								<select
									name="gender"
									id="gender"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 text-gray-400  focus:outline-none"
								>
									<option value="">What is your gender?</option>
									<option value="female">Female</option>
									<option value="male">Male</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div className="mb-6 flex flex-col mt-6">
								<h3 className="text-2xl font-bold mb-1">Section visibility</h3>
								<p className="text-md font-normal mb-1 text-gray-400">
									Select which sections and content should show on your profile
									page.
								</p>
							</div>
							<div className="mb-6 flex flex-col bg-gray-100 p-6 rounded-xl">
								<div className="flex justify-between mb-4">
									<div>
										<h4 className="text-lg font-bold mb-1">
											Followers and following
										</h4>
										<p>
											Shows your followers and the users you follow on
											codedamn
										</p>
									</div>
									<div>
										<input type="checkbox" name="Followers" id="followers" />
									</div>
								</div>
								<div className="flex justify-between mb-4">
									<div>
										<h4 className="text-lg font-bold mb-1">XP</h4>
										<p>Shows the XP you have earned</p>
									</div>
									<div>
										<input type="checkbox" name="xp" id="xp" />
									</div>
								</div>
								<div className="flex justify-between mb-4">
									<div>
										<h4 className="text-lg font-bold mb-1">
											Achievement badges
										</h4>
										<p>Shows your relative percentile and proficiency</p>
									</div>
									<div>
										<input
											type="checkbox"
											name="achievements"
											id="achievements"
										/>
									</div>
								</div>
							</div>
							<div className="mb-6 flex justify-end">
								<button className="m-2 bg-gray-100 py-2 px-5 text-gray-900 text-md rounded-lg font-medium">
									Cancel
								</button>
								<button className="m-2 bg-indigo-600 py-2 px-5 text-white text-md rounded-lg font-medium">
									Save changes
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}