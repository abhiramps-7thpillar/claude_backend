import { Router } from "express";
import ClaudeRoutes from './claude.routes.js'

const routes = new Router();

routes.use("/claude",ClaudeRoutes);

export default routes