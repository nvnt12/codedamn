import Image from 'next/image'
import Card from './Card'

export default function Portfolio() {
	return (
		<>
			<div className="w-8/12 h-fit mt-12 mb-12">
				<div className="mb-6">
					<h1 className="font-bold text-2xl">Stats</h1>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex mb-2 bg-gray-50 p-4 rounded-lg ">
						<div>
							<Image
								src="/Lightning.svg"
								alt="Streak"
								width="50"
								height="50"
								className="rounded-md"
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-xl text-gray-900 font-bold">2</h2>
							<div className="flex justify-between">
								<h3 className="text-md text-gray-500 font-normal">
									Longest streak
								</h3>
							</div>
						</div>
					</div>

					<div className="flex mb-2 bg-gray-50 p-4 rounded-lg ">
						<div>
							<Image
								src="/StarFour.svg"
								alt="Streak"
								width="50"
								height="50"
								className="rounded-md"
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-xl text-gray-900 font-bold">1200</h2>
							<div className="flex justify-between">
								<h3 className="text-md text-gray-500 font-normal">
									Experience points
								</h3>
							</div>
						</div>
					</div>

					<div className="flex mb-2 bg-gray-50 p-4 rounded-lg ">
						<div>
							<Image
								src="/cup.svg"
								alt="Streak"
								width="50"
								height="50"
								className="rounded-md"
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-xl text-gray-900 font-bold">Novice</h2>
							<div className="flex justify-between">
								<h3 className="text-md text-gray-500 font-normal">
									Current league
								</h3>
							</div>
						</div>
					</div>

					<div className="flex mb-2 bg-gray-50 p-4 rounded-lg ">
						<div>
							<Image
								src="/Heartbeat.svg"
								alt="Streak"
								width="50"
								height="50"
								className="rounded-md"
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-xl text-gray-900 font-bold">120</h2>
							<div className="flex justify-between">
								<h3 className="text-md text-gray-500 font-normal">Karma points</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-8/12 h-fit mt-12 mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Projects</h1>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Card
							type="project"
							src={'/project-img.png'}
							alt="Image"
							title="Facebook Login Page"
							lang="HTML/CSS"
							date="12/2/2023"
							selected="false"
						/>
						<Card
							type="project"
							src={'/project-img.png'}
							alt="Image"
							title="Quiz App"
							lang="HTML/CSS"
							date="12/2/2023"
							selected="false"
						/>
						<Card
							type="project"
							src={'/project-img.png'}
							alt="Image"
							title="Twitter Clone"
							lang="HTML/CSS"
							date="12/2/2023"
							selected="false"
						/>
						<Card
							type="project"
							src={'/project-img.png'}
							alt="Image"
							title="Calculator"
							lang="HTML/CSS"
							date="12/2/2023"
							selected="false"
						/>
					</div>
				</div>
			</div>

			<div className="w-8/12 h-fit mt-12 mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Playgrounds</h1>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Card
							type="playground"
							src={'/html-logo.png'}
							alt="Image"
							title="Facebook Clone"
							lang="HTML/CSS"
							date="12/2/2023"
							selected="false"
						/>
						<Card
							type="playground"
							src={'/html-logo.png'}
							alt="Image"
							title="Facebook Clone"
							lang="HTML/CSS"
							date="12/2/2023"
							selected="false"
						/>
						<Card
							type="playground"
							src={'/html-logo.png'}
							alt="Image"
							title="Facebook Clone"
							lang="HTML/CSS"
							date="12/2/2023"
							selected="false"
						/>
						<Card
							type="playground"
							src={'/html-logo.png'}
							alt="Image"
							title="Facebook Clone"
							lang="HTML/CSS"
							date="12/2/2023"
							selected="false"
						/>
					</div>
				</div>
			</div>
		</>
	)
}
