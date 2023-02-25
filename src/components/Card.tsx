import Image from 'next/image'
import { useState } from 'react'

export default function Card(props: {
	type: string
	selected: string
	src: string
	alt: string
	title: string
	lang: string
	date: string
}) {
	const [type, setType] = useState<string>(props.type)
	const selected: string = props.selected

	if (type == 'playground') {
		return (
			<div
				className={`${
					selected == 'true'
						? 'flex mb-2 bg-indigo-50 p-5 rounded-lg border border-indigo-600'
						: 'flex mb-2 bg-gray-50 p-5 rounded-lg '
				} `}
			>
				<Image src={props.src} alt={props.alt} width="60" height="50" />
				<div className="ml-4">
					<h2 className="text-md text-gray-900 font-semibold">{props.title}</h2>
					<h3 className="text-sm text-gray-500 font-normal">{props.lang}</h3>
					<p className=" text-gray-500 text-xs font-normal">{props.date}</p>
				</div>
			</div>
		)
	} else {
		return (
			<div>
				<div
					className={`${
						selected == 'true'
							? 'flex flex-col mb-2 bg-indigo-50 p-5 rounded-lg border border-indigo-600'
							: 'flex flex-col mb-2 bg-gray-50 p-5 rounded-lg '
					} `}
				>
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
}
