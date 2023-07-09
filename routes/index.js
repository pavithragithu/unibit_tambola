import { Router } from "express";
import api from "./api/index.js"
const router = Router();

// Test Route
router.get("/ping", function(req, res) {
    res.send("pong");
});

// Api routes extended for version one
router.use("/api", api); 




export default router;