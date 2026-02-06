import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true 
    },
    registrationNumber: { 
        type: String, 
        required: function() { return this.role !== 'unimentor'; } 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        required: true, 
        enum: ['unibro', 'unimate', 'unimentor'],
        default: 'unibro'
    },
    isApproved: { 
        type: Boolean, 
        default: function() {
            return this.role !== 'unimate'; 
        }
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// ES6 Default Export
const User = mongoose.model('User', UserSchema);
export default User;     