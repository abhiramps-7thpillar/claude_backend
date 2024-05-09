import { Router } from "express";
import { generateClaudeResponse } from "../controllers/claudeController.js";

const routes = new Router();

//POST
routes.post("/prompt", generateClaudeResponse);

export default routes;
