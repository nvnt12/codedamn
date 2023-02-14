import { useState } from 'react'

export default function Toggle(props: any) {
	const [enabled, setEnabled] = useState(props.checked)

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

// export default function ToggleInput(props: any) {
// 	const [enabled, setEnabled] = useState<boolean>(props.checked)
// 	const toggleClass = ' transform translate-x-5'
// 	return (
// 		<div className="flex justify-between mb-4  ">
// 			<div>
// 				<label htmlFor="achievements" className="text-lg font-bold mb-1">
// 					{props.label}
// 				</label>
// 				<p>{props.info}</p>
// 			</div>
// 			<div className="relative inline-flex items-center cursor-pointer">
// 				<input
// 					type={props.type}
// 					name={props.name}
// 					id={props.id}
// 					checked={props.checked}
// 					onChange={props.onChange}
// 				/>
// 				<div
// 					className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
// 					onClick={() => {
// 						if (enabled == true) {
// 							setEnabled(false)
// 						} else {
// 							setEnabled(true)
// 						}
// 					}}
// 				>
// 					<div
// 						className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out${
// 							!enabled ? null : toggleClass
// 						}`}
// 					></div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
