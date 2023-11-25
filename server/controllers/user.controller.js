const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
    const { email, password, firstname, lastname, mobile } = req.body;

    if (!email || !password || !firstname || !lastname || !mobile) {
        return res.status(400).json({
            success: false,
            mes: 'Missing Input',
        });
    }

    const response = await User.create(req.body);

    return res.status(200).json({
        success: response ? true : false,
        response,
    });
});

module.exports = {
    register,
};
