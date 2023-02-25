export default function Input(props: {
	label: string
	type: string
	id: string
	value: string
	info: string
	className: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
	return (
		<div className="mb-3 flex flex-col">
			<label htmlFor="name" className="text-md font-medium mb-1">
				{props.label}
			</label>
			<input
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				className={`border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-indigo-600 ${props.className}`}
			/>
			<p className="text-md font-normal text-gray-500">{props.info}</p>
		</div>
	)
}
