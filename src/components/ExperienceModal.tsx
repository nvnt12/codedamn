import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import Input from './PrimaryInput'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'

export default function ExperienceModal() {
	const [showModal, setShowModal] = useState<boolean>(false)
	return (
		<>
			<TertiaryButton
				type="button"
				value="Add Experience"
				onClick={() => setShowModal(true)}
			></TertiaryButton>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
						<div className="relative w-3/6  mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
								{/*header*/}
								<div className="flex items-start justify-center p-4 rounded-t outline-none hover:outline-none">
									<h3 className="text-xl font-semibold">Add Experience</h3>
								</div>
								{/*body*/}
								<div className="relative py-6 px-6 flex-auto">
									<form className="w-full relative flex-auto" action="">
										<Input
											type="text"
											label="Profile"
											id=""
											value=""
											onChange={e => e.preventDefault()}
											info=""
											className=""
										/>
										<Input
											type="text"
											label="Organization"
											id=""
											value=""
											onChange={e => e.preventDefault()}
											info=""
											className=""
										/>
										<Input
											type="text"
											label="Location"
											id=""
											value=""
											onChange={e => e.preventDefault()}
											info=""
											className=""
										/>
										<div className="flex flex-wrap justify-between">
											<Input
												type="text"
												label="Start"
												id=""
												value=""
												onChange={e => e.preventDefault()}
												info=""
												className="shrink grow w-72"
											/>
											<Input
												type="text"
												label="End"
												id=""
												value=""
												onChange={e => e.preventDefault()}
												info=""
												className="shrink grow w-72"
											/>
										</div>
										<div className="mb-6 flex flex-col">
											<label
												htmlFor="about"
												className="text-md font-medium mb-1"
											>
												Description
											</label>
											<textarea
												name="description"
												id="description"
												className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-indigo-600"
											></textarea>
										</div>
										<div className="flex items-center justify-end rounded-b">
											<SecondaryButton
												type="button"
												value="Cancel"
												onClick={() => setShowModal(false)}
											/>
											<PrimaryButton
												type="button"
												value="Save"
												onClick={() => setShowModal(false)}
											></PrimaryButton>
										</div>
									</form>
								</div>
								{/*footer*/}
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	)
}
