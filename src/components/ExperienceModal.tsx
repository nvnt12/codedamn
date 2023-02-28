import React, { useEffect, useState } from 'react'
import PrimaryButton from './PrimaryButton'
import Input from './PrimaryInput'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'

export default function ExperienceModal(props: {
	experience: [
		{
			index: number
			role: string
			location: string
			start: string
			end: string
			desc: string
			organisation: string
		}
	]
}) {
	const [showModal, setShowModal] = useState<boolean>(false)
	const [role, setRole] = useState<string>('')
	const [location, setLocation] = useState<string>('')
	const [start, setStart] = useState<string>('')
	const [end, setEnd] = useState<string>('')
	const [desc, setDesc] = useState<string>('')
	const [organisation, setOrganisation] = useState<string>('')
	const [experience, setexperience] = useState({
		role,
		location,
		start,
		end,
		desc,
		organisation
	})

	async function handleSubmit() {
		setexperience({
			role,
			location,
			start,
			end,
			desc,
			organisation
		})
		const res = await fetch('/api/insertExperience', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(experience)
		})
		if (res.status == 200) {
			setShowModal(false)
		}
	}

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
									<form
										className="w-full relative flex-auto"
										onSubmit={e => {
											e.preventDefault()
											handleSubmit()
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
										<div className="flex flex-wrap justify-between">
											<Input
												type="text"
												label="Start"
												id=""
												value={start}
												onChange={e => {
													setStart(e.target.value)
												}}
												info=""
												className="shrink grow w-72"
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
												onClick={() => setShowModal(false)}
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
