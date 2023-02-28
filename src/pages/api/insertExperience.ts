import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import Users from '../../model/Users'

export default async function Database(req: NextApiRequest, res: NextApiResponse) {
	mongoose.connect(process.env.MONGODB_URI as string)

	const reqUser = req.body

	if (
		reqUser.role == '' ||
		reqUser.location == '' ||
		reqUser.start == '' ||
		reqUser.end == '' ||
		reqUser.desc == '' ||
		reqUser.organisation == ''
	) {
		return res.status(404)
	}

	const insert = await Users.updateOne(
		{ id: reqUser.id },
		{
			$push: {
				experience: [
					{
						role: reqUser.role,
						location: reqUser.location,
						start: reqUser.start,
						end: reqUser.end,
						desc: reqUser.desc,
						organisation: reqUser.organisation
					}
				]
			}
		}
	)

	if (insert) {
		res.status(200).send(insert)
	}
}
