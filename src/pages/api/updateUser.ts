import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import Users from '../../model/Users'

export default async function Database(req: NextApiRequest, res: NextApiResponse) {
	mongoose.connect(process.env.MONGODB_URI as string)

	const reqUser = req.body
	const update = await Users.updateOne(
		{ id: reqUser._id },
		{
			name: reqUser.name,
			profession: reqUser.profession,
			education: reqUser.education,
			skills: reqUser.skills,
			location: reqUser.location,
			about: reqUser.about,
			dob: reqUser.dob,
			gender: reqUser.gender,
			allowFollowers: reqUser.allowFollowers,
			allowBadge: reqUser.allowBadge,
			allowXp: reqUser.allowXp,
			github: reqUser.github,
			youtube: reqUser.youtube,
			instagram: reqUser.instagram,
			facebook: reqUser.facebook,
			behance: reqUser.behance,
			dribbble: reqUser.dribbble
		}
	)
	if (update) {
		res.status(200).send(update)
	}
}
