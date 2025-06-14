const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Models/User');
const db = require('./Database/db.js');
const AuthRouter = require('./Routes/authRoutes.js');
const ProductRouter = require('./Routes/productRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', AuthRouter);
app.use('/api', ProductRouter);

// ✅ Start server (only once)
app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
