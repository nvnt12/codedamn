import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import Users from '../../model/Users'

export default async function Database(req: NextApiRequest, res: NextApiResponse) {
	mongoose.connect(process.env.MONGODB_URI as string)

	const reqUser = req.body
	const update = await Users.updateOne(
		{ id: reqUser.id },
		{
			name: reqUser.name,
			profession: reqUser.profession,
			skills: reqUser.skills,
			location: reqUser.location,
			about: reqUser.about,
			dob: reqUser.dob,
			institute: reqUser.institute,
			gender: reqUser.gender,
			allowFollowers: reqUser.allowFollowers,
			allowBadge: reqUser.allowBadge,
			allowXp: reqUser.allowXp,
			github: reqUser.github,
			youtube: reqUser.youtube,
			instagram: reqUser.instagram,
			facebook: reqUser.facebook,
			behance: reqUser.behance,
			dribbble: reqUser.dribbble,
			interests: reqUser.interests,
			playgrounds: reqUser.playgrounds,
			projects: reqUser.projects,
			education: reqUser.education,
			experience: reqUser.experience,
			cover: reqUser.cover
		}
	)

	if (update) {
		res.revalidate('/edit_profile')
		res.revalidate('/edit_socials')
		res.revalidate('/edit_resume')
		res.revalidate('/edit_portfolio')
		res.status(200).send(update)
	}
}
