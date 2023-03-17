const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
    issueId: {
        type: Schema.Types.ObjectId,
        ref: 'Issue'
    },
    votes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }]
})

module.exports = mongoose.model('Vote', voteSchema)