require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes')
const incomeRoutes = require('./routes/incomeRoute');
const expenseRoutes = require('./routes/expenseRoute');
const dashboardRoutes = require('./routes/dashboardRoute');

const app = express();

app.use(
    cors({
        origin:process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT" , "DELETE"],
        allowedHeaders: ["Content-type","Authorization"],
    })
);

app.use(express.json());

connectDB();

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/income",incomeRoutes);
app.use("/api/v1/expense",expenseRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);


app.use("/uploads",express.static(path.join(__dirname,"uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))