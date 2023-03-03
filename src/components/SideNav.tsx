import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineChrome } from 'react-icons/ai'

export default function SideNav() {
	const router = useRouter()
	const current = router.route

	return (
		<>
			<div className="w-72 h-fit rounded-2xl bg-gray-50 border-2 border-gray-100 sm:w-full sm:mt-2 md:w-fit md:pr-4">
				<Link
					className="flex items-center mb-5 mt-5 hover:bg-gray-50"
					href={'/edit_profile'}
				>
					<div
						className={`${
							current == '/edit_profile'
								? 'w-1.5 h-10 bg-gray-900 rounded-tr-md rounded-br-md'
								: 'w-1.5 h-10 bg-gray-50 rounded-tr-md rounded-br-md'
						} `}
					></div>
					<AiOutlineChrome
						className={`${
							current == '/edit_profile'
								? 'w-6 h-6 ml-6 md:ml-4 fill-gray-900'
								: 'w-6 h-6 ml-6 md:ml-4 fill-gray-400'
						} `}
						href={'/edit_portfolio'}
					/>
					<div
						className={`${
							current == '/edit_profile'
								? 'p-2 text-lg font-medium text-gray-900'
								: 'p-2 text-lg font-medium text-gray-400'
						} `}
					>
						Profile
					</div>
				</Link>
				<Link className="flex items-center mb-5 mt-5" href={'/edit_socials'}>
					<div
						className={`${
							current == '/edit_socials'
								? 'w-1.5 h-10 bg-gray-900 rounded-tr-md rounded-br-md'
								: 'w-1.5 h-10 bg-gray-50 rounded-tr-md rounded-br-md'
						} `}
					></div>
					<AiOutlineChrome
						className={`${
							current == '/edit_socials'
								? 'w-6 h-6 ml-6 md:ml-4 fill-gray-900'
								: 'w-6 h-6 ml-6 md:ml-4 fill-gray-400'
						} `}
						href={'/edit_portfolio'}
					/>
					<div
						className={`${
							current == '/edit_socials'
								? 'p-2 text-lg font-medium text-gray-900'
								: 'p-2 text-lg font-medium text-gray-400'
						} `}
					>
						Socials
					</div>
				</Link>
				<Link className="flex items-center mb-5 mt-5" href={'/edit_portfolio'}>
					<div
						className={`${
							current == '/edit_portfolio'
								? 'w-1.5 h-10 bg-gray-900 rounded-tr-md rounded-br-md'
								: 'w-1.5 h-10 bg-gray-50 rounded-tr-md rounded-br-md'
						} `}
					></div>
					<AiOutlineChrome
						className={`${
							current == '/edit_portfolio'
								? 'w-6 h-6 ml-6 md:ml-4 fill-gray-900'
								: 'w-6 h-6 ml-6 md:ml-4 fill-gray-400'
						} `}
						href={'/edit_portfolio'}
					/>
					<div
						className={`${
							current == '/edit_portfolio'
								? 'p-2 text-lg font-medium text-gray-900'
								: 'p-2 text-lg font-medium text-gray-400'
						} `}
					>
						Portfolio
					</div>
				</Link>
				<Link className="flex items-center mb-5 mt-5" href={'/edit_resume'}>
					<div
						className={`${
							current == '/edit_resume'
								? 'w-1.5 h-10 bg-gray-900 rounded-tr-md rounded-br-md'
								: 'w-1.5 h-10 bg-gray-50 rounded-tr-md rounded-br-md'
						} `}
					></div>
					<AiOutlineChrome
						className={`${
							current == '/edit_resume'
								? 'w-6 h-6 ml-6 md:ml-4 fill-gray-900'
								: 'w-6 h-6 ml-6 md:ml-4 fill-gray-400'
						} `}
						href={'/edit_portfolio'}
					/>
					<div
						className={`${
							current == '/edit_resume'
								? 'p-2 text-lg font-medium text-gray-900'
								: 'p-2 text-lg font-medium text-gray-400'
						} `}
					>
						Resume
					</div>
				</Link>
			</div>
		</>
	)
}
