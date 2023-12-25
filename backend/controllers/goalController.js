const { error } = require("console")
const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// controllers now bunch of arrow functions

const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find()  // this will find all goals in the DB

    res.status(200).json(goals)

})

const setGoal = asyncHandler(async (req, res) => {

    console.log(req.body)  // before you use body data, you have to add a middleware

    if(!req.body.text){

        res.status(400)
        throw new Error('Please add a text field')

    }

    const goal = await Goal.create({

        text: req.body.text,
    })
    res.status(200).json(goal)

})

const updateGoal = asyncHandler (async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){

        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new: true,})

    res.status(200).json(updatedGoal)

})

const  deleteGoal= asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){

        res.status(400)
        console.log('goal not found')
    }

    const DeleteGoal = await Goal.findByIdAndDelete(req.params.id)

    res.status(200).json({message:`Delete goal ${DeleteGoal}`})

})

// export all functions so they are available to other parts of the code like the server.js
module.exports = {
    
    getGoals,setGoal, updateGoal, deleteGoal,


}