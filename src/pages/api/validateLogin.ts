import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import jsonwebtoken from 'jsonwebtoken'

export default async function handleLogIn(req: NextApiRequest, res: NextApiResponse) {
	mongoose.connect(process.env.MONGODB_URI as string)
	const reqUser = req.body

	if (reqUser.email == 'demo@gmail.com' && reqUser.password == 'password') {
		const token = jsonwebtoken.sign(reqUser, process.env.JWT_KEY as string)
		res.status(200).send(token)
	} else {
		return res.status(401).send('Invalid credentials')
	}
}
