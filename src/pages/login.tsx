import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import PrimaryInput from '../components/PrimaryInput'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function LogIn() {
	const [email, setEmail] = useState<string>('demo@gmail.com')
	const [password, setPassword] = useState<string>('password')
	const pfp: string = '/pfp.jpeg'

	const router = useRouter()

	async function handleSignIn() {
		const res = await fetch('/api/validateLogin', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password,
				pfp
			})
		})

		const resText = await res.text()

		if (res.status === 200) {
			localStorage.setItem('token', resText)
			router.push('/')
		} else {
			toast('Enter valid email and password.')
		}
	}

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<div className="h-full bg-slate-50">
				<NavBar />
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<div className="flex justify-center items-center h-5/6">
					<div className="bg-white p-6 w-4/12 md:w-6/12 sm:w-9/12 rounded-lg flex flex-col items-center drop-shadow-xl shadow-slate-50 m-2">
						<h1 className="text-2xl font-bold text-indigo-600 mb-3">Login</h1>
						<form
							className="flex flex-col w-full"
							onSubmit={e => {
								e.preventDefault()
								handleSignIn()
							}}
						>
							<PrimaryInput
								label="Email"
								type="email"
								id="email"
								value={email}
								onChange={e => {
									setEmail(e.target.value)
								}}
								className=""
								info=""
							></PrimaryInput>
							<PrimaryInput
								label="Password"
								type="password"
								id="password"
								value={password}
								onChange={e => {
									setPassword(e.target.value)
								}}
								className=""
								info=""
							></PrimaryInput>

							<button
								type="submit"
								className="mt-2 mb-2 py-2 bg-indigo-600 rounded-lg w-full xs:w-72 text-md font-medium text-white hover:bg-indigo-700"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
