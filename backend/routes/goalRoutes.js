const express = require('express')
const router = express.Router()

// inject the controllers or API logic into the routes file

const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

// include only / as the endpoint since the server.js already has the rest e.g /api/goals
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)


module.exports = router