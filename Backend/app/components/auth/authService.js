const db = require('../../db/connection/squelize')
exports.register = async (params) => {
 const user = await db.User.create(params)
 return user
}