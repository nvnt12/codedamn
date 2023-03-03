import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
	name: String,
	username: String,
	profession: String,
	institute: String,
	skills: [
		{
			skill: { type: String },
			rate: { type: String }
		}
	],
	location: String,
	about: String,
	dob: String,
	gender: String,
	allowFollowers: Boolean,
	allowBadge: Boolean,
	allowXp: Boolean,
	github: String,
	youtube: String,
	instagram: String,
	facebook: String,
	behance: String,
	dribbble: String,
	education: [
		{
			index: { type: Number },
			degree: { type: String },
			college: { type: String },
			start: { type: String },
			end: { type: String },
			desc: { type: String }
		}
	],
	experience: [
		{
			index: { type: Number },
			role: { type: String },
			location: { type: String },
			start: { type: String },
			end: { type: String },
			desc: { type: String },
			organisation: { type: String }
		}
	],
	playgrounds: [
		{
			title: { type: String },
			type: { type: String },
			src: { type: String },
			alt: { type: String },
			selected: { type: Boolean },
			language: { type: String },
			date: { type: String }
		}
	],
	projects: [
		{
			title: { type: String },
			type: { type: String },
			src: { type: String },
			alt: { type: String },
			selected: { type: Boolean },
			language: { type: String },
			date: { type: String }
		}
	],
	interests: [{ type: String }]
})

export default mongoose.models?.Users || mongoose.model('Users', userSchema)
