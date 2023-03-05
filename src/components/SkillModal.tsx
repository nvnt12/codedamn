import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'

const techStack: {
	id: number
	name: string
}[] = [
	{ id: 1, name: 'HTML 5' },
	{ id: 2, name: 'CSS 3' },
	{ id: 3, name: 'Javascript' },
	{ id: 4, name: 'React' },
	{ id: 5, name: 'Next.Js' },
	{ id: 6, name: 'Node.Js' },
	{ id: 7, name: 'Git' },
	{ id: 8, name: 'PHP' },
	{ id: 9, name: 'Vue' },
	{ id: 10, name: 'Angular' },
	{ id: 11, name: 'MongoDB' },
	{ id: 12, name: 'MySql' },
	{ id: 13, name: 'Solidity' }
]

const rating: {
	id: number
	name: string
}[] = [
	{ id: 1, name: 'Beginner' },
	{ id: 2, name: 'Intermediate' },
	{ id: 3, name: 'Advance' }
]

export default function SkillModal({
	handleSkill
}: {
	handleSkill(skill: string, rate: string): void
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [skill, setSkill] = useState<string>('')
	const [rate, setRate] = useState<string>('')

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<>
			<TertiaryButton type="button" value="Add Skill" onClick={openModal}></TertiaryButton>

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
										<h3 className="text-2xl font-semibold ml-1">Add Skill</h3>
									</div>

									<div className="relative py-2 px-4 flex-auto">
										<form
											className="w-full relative flex-auto"
											onSubmit={e => {
												e.preventDefault()
												handleSkill(skill, rate)
												setIsOpen(false)
												setSkill('')
												setRate('')
											}}
										>
											<div className="mb-6 flex flex-col">
												<label
													htmlFor="skill"
													className="text-md text-gray-900 font-medium mb-1"
												>
													Skill
												</label>
												<select
													name="skill"
													id="skill"
													value={skill}
													onChange={e => {
														setSkill(e.target.value)
													}}
													className="border-2 border-gray-100 p-2.5 rounded-md mb-2 text-gray-900  focus:outline-indigo-600 "
												>
													{techStack.map((item: { name: string }) => (
														<option value={item.name} key={item.name}>
															{item.name}
														</option>
													))}
												</select>
											</div>
											<div className="mb-6 flex flex-col">
												<label
													htmlFor="rate"
													className="text-md text-gray-900 font-medium mb-1"
												>
													How would you rate yourself on this?
												</label>
												<select
													name="rate"
													id="rate"
													value={rate}
													onChange={e => {
														setRate(e.target.value)
													}}
													className="border-2 border-gray-100 p-2.5 rounded-md mb-2 text-gray-900  focus:outline-indigo-600 "
												>
													{rating.map((item: { name: string }) => (
														<option value={item.name} key={item.name}>
															{item.name}
														</option>
													))}
												</select>
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
