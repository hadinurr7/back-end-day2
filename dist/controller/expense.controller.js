"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalExpenseByCategory = exports.getTotalExpenseByDateRange = exports.deleteExpense = exports.updateExpense = exports.createExpense = exports.getExpenseById = exports.getAllExpenses = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataFile = path_1.default.join(__dirname, "../../db.json");
// Fungsi untuk membaca data dari file JSON
const readData = () => JSON.parse(fs_1.default.readFileSync(dataFile, "utf-8"));
// Fungsi untuk menulis data ke file JSON
const writeData = (data) => fs_1.default.writeFileSync(dataFile, JSON.stringify(data, null, 2));
// Controller untuk mendapatkan semua data expense
const getAllExpenses = (req, res) => {
    const data = readData();
    res.json(data);
};
exports.getAllExpenses = getAllExpenses;
// Controller untuk mendapatkan detail expense berdasarkan ID
const getExpenseById = (req, res) => {
    const data = readData();
    const expense = data.find((item) => item.id === req.params.id);
    expense ? res.json(expense) : res.status(404).send("Expense not found");
};
exports.getExpenseById = getExpenseById;
// Controller untuk menambahkan data expense baru
const createExpense = (req, res) => {
    const data = readData();
    const newExpense = Object.assign({ id: Date.now().toString() }, req.body);
    data.push(newExpense);
    writeData(data);
    res.status(201).json(newExpense);
};
exports.createExpense = createExpense;
// Controller untuk mengupdate data expense berdasarkan ID
const updateExpense = (req, res) => {
    const data = readData();
    const index = data.findIndex((item) => item.id === req.params.id);
    if (index !== -1) {
        data[index] = Object.assign(Object.assign({}, data[index]), req.body);
        writeData(data);
        res.json(data[index]);
    }
    else {
        res.status(404).send("Expense not found");
    }
};
exports.updateExpense = updateExpense;
// Controller untuk menghapus data expense berdasarkan ID
const deleteExpense = (req, res) => {
    const data = readData();
    const filteredData = data.filter((item) => item.id !== req.params.id);
    if (filteredData.length !== data.length) {
        writeData(filteredData);
        res.status(204).send();
    }
    else {
        res.status(404).send("Expense not found");
    }
};
exports.deleteExpense = deleteExpense;
// Controller untuk mendapatkan total expense berdasarkan rentang tanggal
const getTotalExpenseByDateRange = (req, res) => {
    const { start, end } = req.query;
    const data = readData();
    // Tentukan default values
    const startDate = start || '1900-01-01'; // Default ke tanggal sangat awal
    const endDate = end || new Date().toISOString().split('T')[0]; // Default ke hari ini
    // Filter data berdasarkan rentang tanggal
    const total = data
        .filter((item) => item.date >= startDate && item.date <= endDate)
        .reduce((sum, item) => sum + item.nominal, 0);
    res.json({ total });
};
exports.getTotalExpenseByDateRange = getTotalExpenseByDateRange;
// Controller untuk mendapatkan total expense berdasarkan kategori
const getTotalExpenseByCategory = (req, res) => {
    const { category } = req.query;
    const data = readData();
    const total = data
        .filter((item) => item.category === category)
        .reduce((sum, item) => sum + item.nominal, 0);
    res.json({ total });
};
exports.getTotalExpenseByCategory = getTotalExpenseByCategory;
