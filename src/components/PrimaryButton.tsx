export default function PrimaryButton(props: {
	type: 'submit' | 'reset' | 'button'
	value: string
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}) {
	return (
		<button
			type={props.type}
			className="mx-2 bg-indigo-600 py-2 px-5 text-white text-md rounded-lg font-medium hover:bg-indigo-700"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	)
}
