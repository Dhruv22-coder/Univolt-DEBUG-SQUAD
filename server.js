import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js'; // Note: You MUST include the .js extension in ES6 imports

const app = express();
// ... rest of your server code  
app.patch('/api/admin/approve/:id', async (req, res) => {
    try {
        // In a production app, you'd verify the JWT token here to ensure the requester is an Admin
        const user = await User.findByIdAndUpdate(req.params.id, { isApproved: true }, { new: true });
        if (!user) return res.status(404).json({ msg: "User not found" });
        
        res.json({ msg: `${user.username} has been approved as Alumni.`, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- GET PENDING ALUMNI ---
app.get('/api/admin/pending', async (req, res) => {
    try {
        const pending = await User.find({ role: 'unimate', isApproved: false });
        res.json(pending);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});