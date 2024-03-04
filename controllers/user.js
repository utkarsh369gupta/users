const Users = require('../models/user')

async function handleGetAllUsers(req, res) {
    const alldbusers = await Users.find({})
    return res.send(alldbusers)
}

async function handleNewUser(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender) {
        return res.status(400).json({ msg: "All fields are req..." });
    }

    const result = await Users.create({
        id: body.id,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
    });
    console.log("result", result);
    return res.status(201).json({ msg: "success" });
}

async function handleGetUserbyId(req, res) {
    const user = await Users.findById(req.params.a);
    res.send(user)
}

async function handleUpdateUserbyId(req, res) {
    await Users.findByIdAndUpdate(req.params.a, { last_name: "patel" });
    res.json({ status: "User Info updated successfully!!!" });
}

async function handleDeleteUserbyId(req, res) {
    await Users.findByIdAndDelete(req.params.a)
    res.json({ status: "User Deleted successfully!!!" });
}

module.exports = {
    handleGetAllUsers,
    handleNewUser,
    handleGetUserbyId,
    handleUpdateUserbyId,
    handleDeleteUserbyId
}
