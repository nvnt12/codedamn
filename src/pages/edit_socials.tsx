import NavBar from '../../components/NavBar'
import SideNav from '../../components/SideNav'

export default function Edit_Socials() {
	return (
		<>
			<NavBar />
			<div className="flex p-12 justify-between">
				<SideNav />
				<div className="w-9/12 px-20">
					<form action="" className="">
						<div className="flex flex-col">
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Github
								</label>
								<input
									type="text"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Youtube
								</label>
								<input
									type="text"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Instagram
								</label>
								<input
									type="text"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Facebook
								</label>
								<input
									type="text"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Behance
								</label>
								<input
									type="text"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>
							<div className="mb-6 flex flex-col">
								<label htmlFor="name" className="text-md font-medium mb-1">
									Dribble
								</label>
								<input
									type="text"
									className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-none"
								/>
							</div>

							<div className="mb-6 flex justify-end">
								<button className="m-2 bg-gray-100 py-2 px-5 text-gray-900 text-md rounded-lg font-medium">
									Cancel
								</button>
								<button className="m-2 bg-indigo-600 py-2 px-5 text-white text-md rounded-lg font-medium">
									Save changes
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
