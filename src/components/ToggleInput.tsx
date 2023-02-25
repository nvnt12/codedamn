import { useState } from 'react'

export default function Toggle(props: {
	label: string
	info: string
	name: string
	type: string
	id: string
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
	const [enabled, setEnabled] = useState<boolean>(props.checked)

	return (
		<div className="relative flex items-center justify-between mb-5">
			<div>
				<label htmlFor="achievements" className="text-lg font-bold mb-1">
					{props.label}
				</label>
				<p>{props.info}</p>
			</div>
			<div className="flex">
				<label
					htmlFor="achievements"
					className="inline-flex relative items-center mr-5 cursor-pointer"
				>
					<input
						name={props.name}
						id={props.id}
						type={props.type}
						className="sr-only peer"
						checked={enabled}
						readOnly
					/>
					<div
						onClick={() => {
							setEnabled(!enabled)
						}}
						className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-indigo-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"
					></div>
				</label>
			</div>
		</div>
	)
}
