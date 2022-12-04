const express = require("express")
const router = express.Router()

const {
    allUsers,
    userProfile,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/user")

// READ
router.get("/all_users", allUsers)
router.get("/profile", userProfile)

// CREATE
router.post("/create", createUser)

// UPDATE
router.put("/update", updateUser)

// DELETE
router.delete("/delete", deleteUser)

module.exports = router