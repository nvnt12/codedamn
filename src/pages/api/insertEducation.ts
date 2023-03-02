import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import Users from '../../model/Users'

export default async function Database(req: NextApiRequest, res: NextApiResponse) {
	mongoose.connect(process.env.MONGODB_URI as string)

	const reqUser = req.body
	console.log(reqUser)
	if (
		reqUser.degree == '' ||
		reqUser.college == '' ||
		reqUser.start == '' ||
		reqUser.end == '' ||
		reqUser.desc == ''
	) {
		return res.status(404)
	}

	const insert = await Users.updateOne(
		{ id: reqUser.id },
		{
			$push: {
				education: [
					{
						degree: reqUser.degree,
						college: reqUser.college,
						start: reqUser.start,
						end: reqUser.end,
						desc: reqUser.desc
					}
				]
			}
		}
	)
	if (insert) {
		res.status(200).send(insert)
	}
}
