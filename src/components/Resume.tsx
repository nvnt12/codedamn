import SecondaryButton from './SecondaryButton'
import Image from 'next/image'

export default function Resume() {
	const interests = ['Semantics', 'Ted talks', 'Coding']
	return (
		<>
			<div className="w-8/12 h-fit mt-12 mb-12">
				<div className="mb-6">
					<h1 className="font-bold text-2xl">About me</h1>
				</div>
				<div>
					<div className="flex mb-2 bg-gray-50 p-6 rounded-2xl border-2 border-gray-100 flex-col">
						<div className="ml-2 mb-6">
							<h2 className="text-md text-gray-900 font-medium">
								Hello, I am Navneet Chadha <br />I love dogs
								<br />I am a final year Computer Science student
								<br />
								<br />I live in Mumbai
							</h2>
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
					<div className="flex mb-6 bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
						<div className="mr-5 w-28">
							<Image
								src={'facebook-icon.svg'}
								alt={'Logo'}
								width="40"
								height="40"
								className="rounded-full"
							/>
						</div>
						<div>
							<div className="flex flex-col mb-6">
								<h1 className="font-semibold text-xl mb-2">
									Front-end Developer at Facebook
								</h1>
								<div className="flex justify-between">
									<p className="text-md font-medium text-gray-600">
										London &bull; Meta inc
									</p>
									<p className="text-md font-bold text-zinc-700">
										July 2020 &ndash; May 2021
									</p>
								</div>
							</div>
							<div>
								<p className="text-gray-500">
									Hello this is a dummy paragrapgh that i am using to just check
									the design
								</p>
							</div>
						</div>
					</div>

					<div className="flex mb-6 bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
						<div className="mr-5 w-28">
							<Image
								src={'facebook-icon.svg'}
								alt={'Logo'}
								width="40"
								height="40"
								className="rounded-full"
							/>
						</div>
						<div>
							<div className="flex flex-col mb-6">
								<h1 className="font-semibold text-xl mb-2">
									Front-end Developer at Facebook
								</h1>
								<div className="flex justify-between">
									<p className="text-md font-medium text-gray-600">
										London &bull; Meta inc
									</p>
									<p className="text-md font-bold text-zinc-700">
										July 2020 &ndash; May 2021
									</p>
								</div>
							</div>
							<div>
								<p className="text-gray-500">
									Hello this is a dummy paragrapgh that i am using to just check
									the design
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-8/12 h-fit mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Education</h1>
					</div>
				</div>
				<div>
					<div className="flex mb-6 bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
						<div className="mr-5 w-28">
							<Image
								src={'facebook-icon.svg'}
								alt={'Logo'}
								width="40"
								height="40"
								className="rounded-full"
							/>
						</div>
						<div>
							<div className="flex flex-col mb-6">
								<h1 className="font-semibold text-xl mb-2">Harvard University</h1>
								<div className="flex justify-between">
									<p className="text-md font-medium text-gray-600">
										Cambridge &bull; Bsc Computer Science
									</p>
									<p className="text-md font-bold text-zinc-700">
										May 2020 &ndash; Present
									</p>
								</div>
							</div>
							<div>
								<p className="text-gray-500">
									Hello this is a dummy paragrapgh that i am using to just check
									the design
								</p>
							</div>
						</div>
					</div>

					<div className="flex mb-6 bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
						<div className="mr-5 w-28">
							<Image
								src={'facebook-icon.svg'}
								alt={'Logo'}
								width="40"
								height="40"
								className="rounded-full"
							/>
						</div>
						<div>
							<div className="flex flex-col mb-6">
								<h1 className="font-semibold text-xl mb-2">
									Master Bim High School
								</h1>
								<div className="flex justify-between">
									<p className="text-md font-medium text-gray-600">
										Atlanta &bull; Bsc
									</p>
									<p className="text-md font-bold text-zinc-700">
										September 2016 &ndash; 2020
									</p>
								</div>
							</div>
							<div>
								<p className="text-gray-500">
									Hello this is a dummy paragrapgh that i am using to just check
									the design
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-8/12 h-fit mb-12">
				<div className="mb-8 w-full">
					<div className="mb-6">
						<h1 className="font-bold text-2xl">Tech skills</h1>
					</div>
				</div>
				<div className="flex">
					{interests.map((interest: string) => (
						<div className="flex justify-between items-center" key={interest}>
							<div className="bg-gray-50 border-2 border-gray-100 px-3 py-1 mr-4 rounded-lg ">
								<p className="text-md text-gray-900 font-semibold">{interest}</p>
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
