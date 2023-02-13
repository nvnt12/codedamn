export default function TertiaryButton(props: any) {
	return (
		<button
			className=" text-indigo-600 font-semibold text-md mr-1 mb-1 "
			type={props.type}
			onClick={props.onClick}
		>
			<span className="text-xl mr-3">+</span>
			{props.value}
		</button>
	)
}
