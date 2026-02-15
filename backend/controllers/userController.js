import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateAuthToken =  (user) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}
//Routes for user authentication and registration
const loginUser=async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = generateAuthToken(user);
        res.status(200).json({ message: 'Login successful', user, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}
//Routes for user authentication and registration
const registerUser=async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();
        const token = generateAuthToken(user);
        res.status(201).json({ message: 'User registered successfully', user, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
    
}
// Route for admin login
const adminLogin=async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = generateAuthToken({ _id: 'admin' });
            res.status(200).json({ message: 'Admin login successful', token });
        } else {
            res.status(401).json({ message: 'Invalid admin credentials' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export { loginUser, registerUser, adminLogin };