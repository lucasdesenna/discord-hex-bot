import { bulkOverwriteDiscordApplicationGlobalCommandsController } from "controllers/discord";
import express from "express";

const router = express.Router();

router.put(
  "/discord/commands",
  bulkOverwriteDiscordApplicationGlobalCommandsController
);
router.delete(
  "/discord/commands",
  bulkOverwriteDiscordApplicationGlobalCommandsController
);

export default router;
