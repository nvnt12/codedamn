import { NextApiRequest, NextApiResponse } from 'next'
import jsonwebtoken from 'jsonwebtoken'

export default async function handleLogIn(req: NextApiRequest, res: NextApiResponse) {
	const token = req.body

	const newToken = jsonwebtoken.sign(token, process.env.JWT_KEY as string)

	return res.status(200).send(newToken)
}
