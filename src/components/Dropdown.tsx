import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown(props: {
	label: string
	items: {
		id: number
		name: string
	}[]
}) {
	const [selected, setSelected] = useState(props.items[0])
	const [query, setQuery] = useState('')

	const filteredStack =
		query === ''
			? props.items
			: props.items.filter((item: { id: number; name: string }) =>
					item.name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  )

	return (
		<div>
			<label htmlFor="name" className="text-md font-medium mb-1">
				{props.label}
			</label>
			<Combobox value={selected} onChange={setSelected}>
				<div className="">
					<div className="border-2 border-gray-100 p-2.5 rounded-md mb-2 focus:outline-indigo-600 flex">
						<Combobox.Input
							className="w-full focus:outline-none"
							displayValue={(item: { id: number; name: string }) => item.name}
							onChange={event => setQuery(event.target.value)}
						/>
						<Combobox.Button className="">
							<ChevronUpDownIcon
								className="h-5 w-5 text-gray-900"
								aria-hidden="true"
							/>
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{filteredStack.length === 0 && query !== '' ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								filteredStack.map((item: { id: number; name: string }) => (
									<Combobox.Option
										key={item.id}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active
													? 'bg-indigo-600 text-white'
													: 'text-gray-900'
											}`
										}
										value={item}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected ? 'font-medium' : 'font-normal'
													}`}
												>
													{item.name}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active ? 'text-white' : 'text-teal-600'
														}`}
													>
														<CheckIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	)
}
