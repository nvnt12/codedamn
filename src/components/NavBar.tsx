import { SlBell, SlMagnifier } from 'react-icons/sl'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { FiChevronDown } from 'react-icons/fi'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const closeMenu = (e: any) => {
			if (btnRef.current && !btnRef.current.contains(e.target)) {
				setMenuOpen(false)
			}
		}

		document.body.addEventListener('click', closeMenu)

		return () => document.body.removeEventListener('click', closeMenu)
	}, [])

	return (
		<div className="flex items-center justify-between h-20">
			<Link href={'/'}>
				<p className="font-bold text-2xl text-gray-800 items-start mr-8 ml-8 ">codedamn</p>
			</Link>

			<div className="flex items-center">
				<div className="flex relative items-center w-fit">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<SlMagnifier className="h-4 w-4 text-gray-600" aria-hidden="true" />
					</div>
					<input
						type="text"
						placeholder="Search"
						className="w-96 mr-6 focus:outline-none border-2 rounded-lg p-2 pt-1.5 pb-1.5 block pl-10 border-gray-50 font-normal text-lg"
					/>
					<div className="absolute inset-y-0 right-8 pl-3 flex items-center">
						<button className="bg-gray-100 py-1 px-3 rounded-md w-fit flex items-center text-gray-500">
							Courses
							<FiChevronDown className="w-5 h-5 ml-2 gray-300" />
						</button>
					</div>
				</div>
				<div className="flex items-center ml-5 mr-5">
					<BsFillLightningChargeFill className="w-6 h-6 mr-1 fill-indigo-400" />
					<p className="text-gray-600 font-bold text-lg">2</p>
				</div>

				<SlBell className="mr-5 ml-5 w-6 h-6 fill-gray-600" />
				<div>
					<button
						ref={btnRef}
						onClick={e => {
							e.preventDefault()
							setMenuOpen(!isMenuOpen)
						}}
					>
						<span className="hidden"> Open Menu</span>
						<Image
							src={'/pfp.jpeg'}
							alt={'Profile Picture'}
							width="40"
							height="40"
							className="rounded-full mr-8 ml-6"
						/>
					</button>
					{isMenuOpen && (
						<div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-sm shadow-lg">
							<div className="p-2">
								<Link
									href="/"
									className="block px-4 py-2 text-md text-gray-700 hover:bg-indigo-500 hover:text-white hover:rounded-md"
								>
									Your profile
								</Link>
								<Link
									href="/edit_profile"
									className="block px-4 py-2 text-md text-gray-700 hover:bg-indigo-500 hover:text-white hover:rounded-md"
								>
									Edit profile
								</Link>
								<Link
									href="/"
									className="block px-4 py-2 text-md text-gray-700 hover:bg-indigo-500 hover:text-white hover:rounded-md"
								>
									Sign out
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
