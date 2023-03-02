import React, { FormEvent, useEffect, useRef, useState } from 'react'

import PrimaryButton from './PrimaryButton'
import Input from './PrimaryInput'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'

export default function EducationModal(props: {
	education: [
		{
			index: number
			degree: string
			college: string
			start: string
			end: string
			desc: string
		}
	]
}) {
	const [showModal, setShowModal] = useState<boolean>(false)
	const [degree, setDegree] = useState<string>('')
	const [college, setCollege] = useState<string>('')
	const [start, setStart] = useState<string>('')
	const [end, setEnd] = useState<string>('')
	const [desc, setDesc] = useState<string>('')
	const [education, setEducation] = useState({
		degree,
		college,
		start,
		end,
		desc
	})

	async function handleSubmit() {
		setEducation({
			degree,
			college,
			start,
			end,
			desc
		})
		const res = await fetch('/api/insertEducation', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(education)
		})
		if (res.status == 200) {
			setShowModal(false)
		}
	}

	return (
		<>
			<TertiaryButton
				type="button"
				value="Add Education"
				onClick={() => setShowModal(true)}
			></TertiaryButton>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
						<div className="relative w-5/6 mx-auto max-w-3xl sm:w-full sm:px-2 md:w-5/6 md:px-6 sm:h-5/6">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
								{/*header*/}
								<div className="flex items-start justify-center p-4 rounded-t">
									<h3 className="text-xl font-semibold">Add Education</h3>
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
											label="Degree"
											id="degree"
											className=""
											info=""
											value={degree}
											onChange={e => {
												setDegree(e.target.value)
											}}
										/>
										<Input
											type="text"
											label="College"
											id=""
											className=""
											info=""
											value={college}
											onChange={e => {
												setCollege(e.target.value)
											}}
										/>
										<div className="flex w-full gap-4 sm:flex-wrap">
											<Input
												type="year"
												label="Start"
												className=""
												id=""
												info=""
												value={start}
												onChange={e => {
													setStart(e.target.value)
												}}
											/>
											<Input
												type="text"
												label="End"
												className=""
												id=""
												info=""
												value={end}
												onChange={e => {
													setEnd(e.target.value)
												}}
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
