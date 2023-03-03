import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PrimaryButton from './PrimaryButton'
import Input from './PrimaryInput'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'

export default function ExperienceModal({ handleExperience }) {
	const [isOpen, setIsOpen] = useState(false)
	const [role, setRole] = useState<string>('')
	const [location, setLocation] = useState<string>('')
	const [start, setStart] = useState<string>('')
	const [end, setEnd] = useState<string>('')
	const [desc, setDesc] = useState<string>('')
	const [organisation, setOrganisation] = useState<string>('')

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<>
			<TertiaryButton
				type="button"
				value="Add Experience"
				onClick={openModal}
			></TertiaryButton>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-2 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-9/12 mx-auto max-w-3xl sm:w-full sm:px-2 md:w-10/12 md:px-6 sm:h-5/6 rounded-xl bg-white p-2 text-left align-middle shadow-xl transition-all">
									<div className="flex items-start justify-center p-3 rounded-t">
										<h3 className="text-xl font-semibold">Add Education</h3>
									</div>

									<div className="relative py-6 px-6 flex-auto">
										<form
											className="w-full relative flex-auto"
											onSubmit={e => {
												e.preventDefault()
												handleExperience(
													role,
													organisation,
													desc,
													start,
													end,
													location
												)
												setIsOpen(false)
												setRole('')
												setOrganisation('')
												setLocation('')
												setStart('')
												setEnd('')
											}}
										>
											<Input
												type="text"
												label="Profile"
												id=""
												value={role}
												onChange={e => {
													setRole(e.target.value)
												}}
												info=""
												className=""
											/>
											<Input
												type="text"
												label="Organization"
												id=""
												value={organisation}
												onChange={e => {
													setOrganisation(e.target.value)
												}}
												info=""
												className=""
											/>
											<Input
												type="text"
												label="Location"
												id=""
												value={location}
												onChange={e => {
													setLocation(e.target.value)
												}}
												info=""
												className=""
											/>
											<div className="flex w-full gap-4 sm:flex-wrap md:gap-4">
												<Input
													type="text"
													label="Start"
													id=""
													value={start}
													onChange={e => {
														setStart(e.target.value)
													}}
													info=""
													className=""
												/>
												<Input
													type="text"
													label="End"
													id=""
													value={end}
													onChange={e => {
														setEnd(e.target.value)
													}}
													info=""
													className=""
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
													value={desc}
													onChange={e => {
														setDesc(e.target.value)
													}}
													className=" border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-indigo-600"
												></textarea>
											</div>
											<div className="flex items-center justify-end rounded-b">
												<SecondaryButton
													type="button"
													value="Cancel"
													onClick={() => setIsOpen(false)}
												/>
												<PrimaryButton
													type="submit"
													value="Save"
													onClick={() => {
														//do something
													}}
												></PrimaryButton>
											</div>
										</form>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
