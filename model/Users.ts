import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
	name: String,
	profession: String,
	education: String,
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
	dribbble: String
})

export default mongoose.models?.Users || mongoose.model('Users', userSchema)
