const express = require("express")

const router = express.Router();
const Users = require('../models/user');
const { handleGetAllUsers, handleNewUser, handleGetUserbyId, handleUpdateUserbyId, handleDeleteUserbyId } = require("../controllers/user");

router.use(express.urlencoded({ extended: false }));
router.use(express.json())

router.get('/', handleGetAllUsers)

router.post('/', handleNewUser)


router.route('/:a')
    .get(handleGetUserbyId)
    .patch(handleUpdateUserbyId)
    .delete(handleDeleteUserbyId)

module.exports = router;