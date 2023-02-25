export default function TertiaryButton(props: {
	type: 'submit' | 'reset' | 'button'
	value: string
	onClick: () => void
}) {
	return (
		<button
			className="text-indigo-600 font-semibold text-md mr-1 mb-1 outline-none hover:outline-none"
			type={props.type}
			onClick={props.onClick}
		>
			<span className="text-xl mr-3">+</span>
			{props.value}
		</button>
	)
}
