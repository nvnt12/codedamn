import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PrimaryButton from './PrimaryButton'
import Input from './PrimaryInput'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'

export default function InterestModal({
	handleInterest
}: {
	handleInterest(interest: string): void
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [interest, setInterest] = useState<string>('')

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<>
			<TertiaryButton type="button" value="Add Interest" onClick={openModal}></TertiaryButton>

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
								<Dialog.Panel className="w-8/12 mx-auto max-w-3xl sm:w-full sm:px-3 md:w-10/12 md:px-6 sm:h-5/6 rounded-xl bg-zinc-50 p-6 text-left align-middle shadow-xl transition-all">
									<div className="flex items-start justify-start p-3 rounded-t">
										<h3 className="text-2xl font-semibold ml-1">
											Add Interest
										</h3>
									</div>

									<div className="relative py-2 px-4 flex-auto">
										<form
											className="w-full relative flex-auto"
											onSubmit={e => {
												e.preventDefault()
												setIsOpen(false)
												handleInterest(interest)
												setInterest('')
											}}
										>
											<Input
												type="text"
												label="Interest"
												id=""
												className=""
												info=""
												value={interest}
												onChange={e => {
													setInterest(e.target.value)
												}}
											/>

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
