const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
//const xss = require("xss-clean");
const cookieParser = require("cookie-parser");

const connectDB = require("./config");
const errorHandler = require("./middleware/errorHandler");
const rateLimiter = require("./middleware/rateLimiter");

const adminRoutes = require("./routes/admin");

require("dotenv").config();

const app = express();
app.set('trust proxy', 1);
connectDB();

// Middleware
app.use(cors());
app.use(helmet());
//app.use(xss());
app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);

// Routes
app.use("/api/admin", adminRoutes); 
app.use('/api/auth', require('./routes/authRoutes'));

//app.use("/api/test", require("./routes/test")); // example test route

app.use('/api/assets', require('./routes/assetRoutes'));

const userRoutes = require('./routes/userRoutes');
console.log('userRoutes is:', typeof userRoutes, userRoutes);
app.use('/api/users', userRoutes);

// Error handler (should be last middleware)
app.use(errorHandler);
console.log('errorHandler is:', typeof errorHandler, errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
