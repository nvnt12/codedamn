import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'
import Dropdown from './Dropdown'

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

const rate: {
	id: number
	name: string
}[] = [
	{ id: 1, name: 'Beginner' },
	{ id: 2, name: 'Intermediate' },
	{ id: 3, name: 'Advance' }
]

export default function SkillModal() {
	const [showModal, setShowModal] = React.useState(false)
	return (
		<>
			<TertiaryButton
				type="button"
				value="Add Skill"
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
									<h3 className="text-xl font-semibold">Add Skill</h3>
								</div>
								{/*body*/}
								<div className="relative py-6 px-6 flex-auto">
									<form className="w-full relative flex-auto" action="">
										<Dropdown label="Skill" items={techStack} />
										<Dropdown
											label="How would you rate yourself on this?"
											items={rate}
										/>
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
