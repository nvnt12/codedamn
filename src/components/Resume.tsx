import SecondaryButton from './SecondaryButton'
import Image from 'next/image'

export default function Resume(props: {
	about: string
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
	const skills = props.skills
	const about = props.about
	const interests = props.interests
	const education = props.education
	const experience = props.experience

	return (
		<>
			<div className="w-8/12 h-fit mt-12 mb-12">
				<div className="mb-6">
					<h1 className="font-bold text-2xl">About me</h1>
				</div>
				<div>
					<div className="flex mb-2 bg-gray-50 p-6 rounded-2xl border-2 border-gray-100 flex-col">
						<div className="ml-2 mb-6">
							<h2 className="text-md text-gray-900 font-medium">{about}</h2>
						</div>
						<div>
							<SecondaryButton
								type="button"
								value="Read more"
								onClick={() => {
									//do something
								}}
							></SecondaryButton>
						</div>
					</div>
				</div>
			</div>

			<div className="w-8/12 h-fit mb-6">
				<div className="mb-6">
					<h1 className="font-bold text-2xl">Work experience</h1>
				</div>
				<div>
					{experience.map(
						(exp: {
							index: number
							role: string
							location: string
							start: string
							end: string
							desc: string
							organisation: string
							img: string
						}) => (
							<div
								className="flex mb-6 bg-gray-50 p-8 rounded-2xl border-2 border-gray-100"
								key={exp.role}
							>
								<div className="mr-5 w-10">
									<Image
										src={exp.img || '/facebook-icon.png'}
										alt={'Logo'}
										width="40"
										height="40"
										className="rounded-full"
									/>
								</div>
								<div className="w-full">
									<div className="flex flex-col mb-6">
										<h1 className="font-semibold text-xl mb-2">{exp.role}</h1>
										<div className="flex justify-between">
											<p className="text-md font-medium text-gray-600">
												{exp.location} &bull; {exp.organisation}
											</p>
											<p className="text-md font-bold text-zinc-700">
												{exp.start} &ndash; {exp.end}
											</p>
										</div>
									</div>
									<div>
										<p className="text-gray-500">{exp.desc}</p>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>

			<div className="w-8/12 h-fit mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Education</h1>
					</div>
				</div>
				<div>
					{education.map(
						(edu: {
							index: number
							degree: string
							college: string
							start: string
							end: string
							img: string
							desc: string
						}) => (
							<div
								className="flex mb-6 bg-gray-50 p-8 rounded-2xl border-2 border-gray-100"
								key={edu.degree}
							>
								<div className="mr-5 w-10">
									<Image
										src={edu.img || '/edu-icon.png'}
										alt={'Logo'}
										width="40"
										height="40"
										className="rounded-full"
									/>
								</div>
								<div className="w-full">
									<div className="flex flex-col mb-6">
										<h1 className="font-semibold text-xl mb-2">
											{edu.college}
										</h1>
										<div className="flex justify-between">
											<p className="text-md font-medium text-gray-600">
												{edu.degree}
											</p>
											<p className="text-md font-bold text-zinc-700">
												{edu.start} &ndash; {edu.end}
											</p>
										</div>
									</div>
									<div>
										<p className="text-gray-500">{edu.desc}</p>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>

			<div className="w-8/12 h-fit mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Tech skills</h1>
					</div>
				</div>
				<div className="flex">
					{skills.map((skill: { index: number; skill: string; rate: string }) => (
						<div className="flex justify-between items-center" key={skill.index}>
							<div className="bg-gray-50 border-2 border-gray-100 px-3 py-1 mr-4 rounded-lg ">
								<p className="text-md text-gray-900 font-semibold">{skill.skill}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="w-8/12 h-fit mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Interests</h1>
					</div>
					<div className="flex">
						{interests.map((interest: string) => (
							<div className="flex justify-between items-center" key={interest}>
								<div className="bg-gray-50 border-2 border-gray-100 px-3 py-1 mr-4 rounded-lg ">
									<p className="text-md text-gray-900 font-semibold">
										{interest}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
