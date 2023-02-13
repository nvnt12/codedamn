import Image from 'next/image'

export default function ProjectCard(props: any) {
	return (
		<div>
			<div className="flex flex-col mb-2 bg-gray-50 p-5 rounded-lg ">
				<div>
					<Image
						src={props.src}
						alt={props.alt}
						width="320"
						height="100"
						className="rounded-md"
					/>
				</div>
				<div className="ml-4">
					<h2 className="text-md text-gray-900 font-semibold">{props.title}</h2>
					<div className="flex justify-between">
						<h3 className="text-sm text-gray-500 font-normal">{props.lang}</h3>
						<p className=" text-gray-500 text-xs font-normal">{props.date}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
