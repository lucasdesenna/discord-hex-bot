import { handleSyncApplicationCommands } from "controllers/discord";
import express from "express";

const router = express.Router();

router.post("/discord/app-commands/sync", handleSyncApplicationCommands);

export default router;
