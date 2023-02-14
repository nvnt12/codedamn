export default function SecondaryButton(props: any) {
	return (
		<button
			type={props.type}
			className="mx-2 bg-gray-100 py-2 px-5 text-gray-900 text-md rounded-lg font-medium"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	)
}
