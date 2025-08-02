const Income = require("../models/Income");
const Expense = require("../models/Expense");
const { isValidObjectId, Types } = require("mongoose");

exports.getDashboardData = async (req, res) => {
    try {
        // ✅ Debug check for authentication middleware
        console.log("DEBUG req.user:", req.user);

        const userId = req.user?.id;

        // 🛑 Handle missing userId
        if (!userId || !isValidObjectId(userId)) {
            return res.status(400).json({ message: "Invalid or missing user ID." });
        }

        const UserObjectId = new Types.ObjectId(String(userId));

        // 💰 Total Income
        const totalIncome = await Income.aggregate([
            { $match: { userId: UserObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);
        console.log("Total Income:", totalIncome);

        // 💸 Total Expense
        const totalExpense = await Expense.aggregate([
            { $match: { userId: UserObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);
        console.log("Total Expense:", totalExpense);

        // 📈 Income last 60 days
        const last60DaysIncomeTransactions = await Income.find({
            userId,
            date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
        }).sort({ date: -1 });

        const incomeLast60Days = last60DaysIncomeTransactions.reduce(
            (sum, txn) => sum + txn.amount,
            0
        );

        // 📉 Expense last 30 days
        const last30DaysExpenseTransactions = await Expense.find({
            userId,
            date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
        }).sort({ date: -1 });

        const expenseLast30Days = last30DaysExpenseTransactions.reduce(
            (sum, txn) => sum + txn.amount,
            0
        );

        // 🕒 Recent Transactions (Top 5, latest first)
        const lastTransactions = [
            ...(await Income.find({ userId }).sort({ date: -1 }).limit(5)).map((txn) => ({
                ...txn.toObject(),
                type: "income",
            })),
            ...(await Expense.find({ userId }).sort({ date: -1 }).limit(5)).map((txn) => ({
                ...txn.toObject(),
                type: "expense",
            })),
        ].sort((a, b) => b.date - a.date);

        // ✅ Respond with dashboard data
        res.json({
            totalBalance:
                (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
            totalIncome: totalIncome[0]?.total || 0,
            totalExpense: totalExpense[0]?.total || 0,
            last30DaysExpenses: {
                total: expenseLast30Days,
                transactions: last30DaysExpenseTransactions,
            },
            last60DaysIncome: {
                total: incomeLast60Days,
                transactions: last60DaysIncomeTransactions,
            },
            recentTransactions: lastTransactions,
        });
    } catch (error) {
        console.error("Dashboard Error: ", error);
        res.status(500).json({
            message: "Server Error",
            error: error.message || error.toString(),
        });
    }
};
