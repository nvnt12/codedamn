import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import { BiPencil, BiTrashAlt } from 'react-icons/bi'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import EducationModal from '../components/EducationModal'
import ExperienceModal from '../components/ExperienceModal'
import SkillModal from '../components/SkillModal'
import { GetStaticProps } from 'next'
import Users from '../model/Users'
import mongoose from 'mongoose'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).lean()

	const props = {
		skills: user?.skills,
		interests: user?.interests
	}

	return {
		props: props,
		revalidate: 10
	}
}
export default function Edit_Resume(props: { skills: string[]; interests: string[] }) {
	const skills = props.skills
	const interests = props.interests

	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between">
				<SideNav />
				<div className="w-9/12 px-20">
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-xl">Education</h1>
							<EducationModal />
						</div>
						<div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100 flex  flex-col justify-between">
							<div className="flex justify-between mb-6">
								<div>
									<h2 className="text-lg text-gray-800 font-semibold">
										Bachelor of Science CS
									</h2>
									<h3 className="text-md text-gray-600 font-normal">
										Mulund College of Commerce
									</h3>
									<p className=" text-gray-600 text-sm font-normal">
										2020
										<span>-</span>
										2023
									</p>
								</div>
								<div>
									<button>
										<BiPencil className="h-6 w-6 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-6 w-6 fill-gray-500" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-xl">Work Experience</h1>
							<ExperienceModal />
						</div>
						<div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100 flex  flex-col justify-between">
							<div className="flex justify-between mb-6">
								<div>
									<h2 className="text-lg text-gray-800 font-semibold">
										Jr. Frontend Developer at Tcs
									</h2>
									<h3 className="text-md text-gray-600 font-normal">Mumbai</h3>
									<p className=" text-gray-600 text-sm font-normal">
										2020<span>-</span>2023
									</p>
								</div>
								<div>
									<button>
										<BiPencil className="h-6 w-6 fill-gray-500 mr-4" />
									</button>
									<button>
										<BiTrashAlt className="h-6 w-6 fill-gray-500" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-xl">Skills</h1>
							<SkillModal />
						</div>
						<div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100 flex-col">
							<div className="flex justify-between ">
								<div className="pt-1 pb-1 grid grid-cols-2 w-full gap-x-14">
									{skills.map((skill: string) => (
										<div
											key={skill}
											className="flex shrink mb-4 justify-between items-center"
										>
											<div className="pr-4 pl-4 pt-1 pb-1 rounded-md mr-3 ">
												<p className="text-md text-gray-800 font-semibold">
													{skill}
												</p>
												<p className="text-sm text-gray-500">Beginner</p>
											</div>
											<div className="mt-1 mr-4">
												<button>
													<BiPencil className="h-6 w-6 fill-gray-500 mr-4" />
												</button>
												<button>
													<BiTrashAlt className="h-6 w-6 fill-gray-500" />
												</button>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-xl">Interests</h1>
						</div>
						<div className="flex-col">
							<div className="flex">
								{interests.map((interest: string) => (
									<div
										className="flex justify-between items-center"
										key={interest}
									>
										<div className="bg-gray-50 border-2 border-gray-100 px-3 py-1 mr-4 rounded-lg ">
											<p className="text-md text-gray-800 font-semibold">
												{interest}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="mb-6 flex justify-end">
						<SecondaryButton
							type="button"
							value="Cancel"
							onClick={() => {
								//do something
							}}
						></SecondaryButton>
						<PrimaryButton
							value="Save changes"
							type="submit"
							onClick={() => {
								//do something
							}}
						></PrimaryButton>
					</div>
				</div>
			</div>
		</>
	)
}
