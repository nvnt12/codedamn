import React from 'react'
import PrimaryButton from './PrimaryButton'
import Input from './PrimaryInput'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'

export default function EducationModal() {
	const [showModal, setShowModal] = React.useState(false)
	return (
		<>
			<TertiaryButton
				className=" text-indigo-600 font-semibold text-md mr-1 mb-1  outline-none hover:outline-none"
				type="button"
				value="Add Education"
				onClick={() => setShowModal(true)}
			></TertiaryButton>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
						<div className="relative w-3/6  mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
								{/*header*/}
								<div className="flex items-start justify-center p-4 rounded-t">
									<h3 className="text-xl font-semibold">Add Education</h3>
								</div>
								{/*body*/}
								<div className="relative py-6 px-6 flex-auto">
									<form className="w-full relative flex-auto" action="">
										<Input type="text" label="Degree" className="mb-2" />
										<Input type="text" label="College" />
										<div className="flex flex-wrap justify-between">
											<Input
												type="year"
												label="Start"
												className="shrink grow w-72"
											/>
											<Input
												type="text"
												label="End"
												className="shrink grow w-72"
											/>
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
