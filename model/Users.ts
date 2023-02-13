import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
	name: String,
	username: String,
	profession: String,
	institute: String,
	skills: String,
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
	education: [String]
})

export default mongoose.models?.Users || mongoose.model('Users', userSchema)
