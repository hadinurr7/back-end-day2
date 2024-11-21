"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./routes/user.router"));
const expense_router_1 = __importDefault(require("./routes/expense.router"));
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/api", (request, response) => {
    response.status(200).send("Welcome to MY API (express)");
});
// routes
app.use("/users", user_router_1.default);
app.use("/users/:id", user_router_1.default);
app.use("/expenses", expense_router_1.default);
app.use("/expenses/:id", expense_router_1.default);
// error middleware
app.use((err, request, response, next) => {
    response.status(400).send(err.message);
});
app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});
