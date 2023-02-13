export default function PrimaryButton(props: any) {
	return (
		<button
			type={props.type}
			className="mx-2 bg-indigo-600 py-2 px-5 text-white text-md rounded-lg font-medium"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	)
}
