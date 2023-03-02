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
import { useState } from 'react'
import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps = async context => {
	mongoose.connect(process.env.MONGODB_URI as string)

	const user = await Users.findById(process.env.USER_ID).lean()

	const prop = JSON.stringify({
		skills: user?.skills,
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

export default function Edit_Resume(props: {
	skills: [
		{
			index: number
			skill: string
			rate: string
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
		}
	]
}) {
	const [skills, setSkills] = useState(props.skills)
	const interests = props.interests
	const [education, setEducation] = useState(props.education)
	const [experience, setExperience] = useState(props.experience)
	const router = useRouter()

	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between sm:flex-wrap sm:px-3 sm:py-6 md:px-4 md:py-8 md:ml-2">
				<SideNav />
				<div className="w-9/12 px-20 sm:w-full sm:mt-6 sm:px-2 md:w-full md:px-6">
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-xl">Education</h1>
							<EducationModal education={education} />
						</div>
						<div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100 flex  flex-col justify-between">
							{education.map(
								(edu: {
									index: number
									degree: string
									college: string
									start: string
									end: string
									desc: string
								}) => (
									<div className="flex justify-between mb-6" key={edu.degree}>
										<div>
											<h2 className="text-lg text-gray-900 font-semibold">
												{edu.degree}
											</h2>
											<h3 className="text-md text-gray-600 font-medium">
												{edu.college}
											</h3>
											<p className=" text-gray-600 text-sm font-medium mb-3">
												{edu.start}
												&ndash;
												{edu.end}
											</p>
											<p className="text-gray-700 text-md">{edu.desc}</p>
										</div>

										<div>
											<button>
												<BiTrashAlt className="h-6 w-6 fill-gray-500" />
											</button>
										</div>
									</div>
								)
							)}
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-xl">Work Experience</h1>
							<ExperienceModal experience={experience} />
						</div>
						<div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100 flex  flex-col justify-between">
							{experience.map(
								(exp: {
									index: number
									role: string
									location: string
									start: string
									end: string
									desc: string
									organisation: string
								}) => (
									<div className="flex justify-between pb-8" key={exp.role}>
										<div className="w-5/6">
											<h2 className="text-lg text-gray-800 font-semibold">
												{exp.role}
											</h2>
											<div className="flex justify-between mb-1 sm:flex-col">
												<h3 className="text-md text-gray-700 font-medium">
													{exp.location} &bull; {exp.organisation}
												</h3>

												<p className=" text-gray-700 text-sm font-medium mb-2">
													{exp.start}
													&ndash;
													{exp.end}
												</p>
											</div>
											<p className="text-gray-700 text-md">{exp.desc}</p>
										</div>
										<div>
											<button>
												<BiTrashAlt className="h-6 w-6 fill-gray-500" />
											</button>
										</div>
									</div>
								)
							)}
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6">
							<h1 className="font-semibold text-xl">Skills</h1>
							<SkillModal />
						</div>
						<div className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-100 flex-col">
							<div className="flex justify-between ">
								<div className="pt-1 pb-1 grid grid-cols-2 w-full gap-x-14 sm:grid-cols-1">
									{skills.map(
										(skill: { index: number; skill: string; rate: string }) => (
											<div
												key={skill.skill}
												className="flex shrink mb-4 justify-between items-center"
											>
												<div className="pr-4 pl-4 pt-1 pb-1 rounded-md mr-3 ">
													<p className="text-md text-gray-800 font-semibold">
														{skill.skill}
													</p>
													<p className="text-sm text-gray-500">
														{skill.rate}
													</p>
												</div>
												<div className="mt-1 mr-4">
													<button>
														<BiTrashAlt className="h-6 w-6 fill-gray-500" />
													</button>
												</div>
											</div>
										)
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="mb-8">
						<div className="flex justify-between items-center mb-6 sm:mb-4">
							<h1 className="font-semibold text-xl">Interests</h1>
						</div>
						<div className="">
							<div className="flex sm:flex-wrap md:flex-wrap">
								{interests.map((interest: string) => (
									<div
										className="flex justify-between items-center sm:mt-2 md:mt-2"
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
								router.push('/')
							}}
						></SecondaryButton>
						<PrimaryButton
							value="Save changes"
							type="button"
							onClick={() => {
								router.reload()
							}}
						></PrimaryButton>
					</div>
				</div>
			</div>
		</>
	)
}
