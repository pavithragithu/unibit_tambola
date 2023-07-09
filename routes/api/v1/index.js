import { Router } from "express";
const router = Router();
import { verifyToken } from "../../../config/middleware.js";
import { login , register } from "../../../controller/v1/user.js";
import { createTicket, fetchTickets } from "../../../controller/v1/ticket.js";



// Register  User API
router.post("/register", register);

// Login User API
router.post("/login", login);

// Create Ticket API
router.post("/createTicket",verifyToken, createTicket);

// Fetch Ticket API
router.get("/tickets/:userId",verifyToken, fetchTickets);


export default router;