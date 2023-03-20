const express = require('express')
const commentRouter = express.Router()
const Issue = require('../models/issue.js')
const Comment = require('../models/comment.js')

// Add new Comment
commentRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const id = req.params.issueId
    const newComment = new Comment(req.body)

    Issue.findById({ _id: id }, (err, issue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        issue.comments.push(newComment)
        issue.populate('comments')
        issue.save()
        
        return res.status(200).send(issue)
    })
    
})

// Delete comment by id
commentRouter.delete('/:commentId', (req, res, next) => {
    req.body.user = req.auth._id
    const issueId = req.params.issueId
    Comment.findOneAndDelete(
        { _id: req.params.commentId, user: req.body.user, issue: issueId },
        (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted comment: ${deletedComment.comment}`)
        })
})

module.exports = commentRouter