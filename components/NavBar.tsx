import { SlBell, SlMagnifier } from 'react-icons/sl'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import Image from 'next/image'

export default function NavBar() {
	return (
		<div className="flex items-center justify-between h-20">
			<p className="font-bold text-2xl text-gray-800 items-start mr-8 ml-8 ">codedamn</p>
			<div className="flex items-center">
				<div className="flex relative items-center w-fit">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<SlMagnifier className="h-4 w-4 text-gray-600" aria-hidden="true" />
					</div>
					<input
						type="text"
						placeholder="Search"
						className="w-96 mr-6 focus:outline-none border-2 rounded-lg p-2 pt-1 pb-1 block pl-10 border-gray-50 font-normal text-lg"
					/>
				</div>
				<div className="flex items-center ml-5 mr-5">
					<BsFillLightningChargeFill className="w-6 h-6 mr-1 fill-indigo-400" />
					<p className="text-gray-600 font-bold text-lg">2</p>
				</div>

				<SlBell className="mr-5 ml-5 w-6 h-6 fill-gray-600" />
				<Image
					src={'/pfp.jpeg'}
					alt={'Profile Picture'}
					width="40"
					height="40"
					className="rounded-full mr-8 ml-6"
				/>
			</div>
		</div>
	)
}
