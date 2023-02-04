import { AiOutlineChrome } from 'react-icons/ai'

export default function SideNav() {
	return (
		<>
			<div className="w-72 h-fit rounded-2xl px-6 py-2 bg-gray-50 border-2 border-gray-100">
				<div className="flex items-center mb-5 mt-5">
					<AiOutlineChrome className="w-6 h-6 fill-gray-900" />
					<h2 className="p-2 text-lg font-medium text-gray-900">Profile</h2>
				</div>
				<div className="flex items-center mb-5 mt-5">
					<AiOutlineChrome className="w-6 h-6 fill-gray-400" />
					<h2 className="p-2 text-lg font-medium text-gray-400">Socials</h2>
				</div>
				<div className="flex items-center mb-5 mt-5">
					<AiOutlineChrome className="w-6 h-6 fill-gray-400" />
					<h2 className="p-2 text-lg font-medium text-gray-400">Portfolio</h2>
				</div>
				<div className="flex items-center mb-5 mt-5">
					<AiOutlineChrome className="w-6 h-6 fill-gray-400" />
					<h2 className="p-2 text-lg font-medium text-gray-400">Resume</h2>
				</div>
			</div>
		</>
	)
}
