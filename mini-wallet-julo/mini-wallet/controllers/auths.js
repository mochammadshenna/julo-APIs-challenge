const { comparePassword } = require("../helpers/bcryptjs");
const { createToken, verifyToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const { User } = require("../models");

const postAdminRegister = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const newAdmin = await User.create({ email, password });
        res.status(201).json({ message: "New admin has been created as below.", id: newAdmin.id, email: newAdmin.email });
    } catch (error) {
        next(error);
    }
};

const postLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const foundUser = await User.findOne({ where: { email } });
        if (!foundUser) throw { name: "INVALID_LOGIN" }
        let isValidPassword = comparePassword(password, foundUser.password);
        if (!isValidPassword) throw { name: "INVALID_LOGIN" };
        if (foundUser.role !== 'admin' && foundUser.role !== 'staff') throw { name: "FORBIDDEN" };
        let access_token = createToken({ email: foundUser.email, password: foundUser.password, role: foundUser.role });
        res.status(200).json({ message: "Login Success.", access_token, email: foundUser.email, role: foundUser.role });
    } catch (error) {
        next(error);
    }
};

const getToken = async (req, res, next) => {
    const { access_token } = req.headers;
    try {
        const verifiedUser = verifyToken(access_token);
        const validUser = await User.findOne({ where: { email: verifiedUser.email } });
        if (!validUser) throw { name: "INVALID_LOGIN" };
        res.status(200).json({ message: "Token is valid." });
        next();
    } catch (error) {
        next(error);
    }
};


module.exports = { postAdminRegister, postLogin, getToken };
