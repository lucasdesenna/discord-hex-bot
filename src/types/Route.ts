import { RequestHandler } from "express";

type Route = {
  path: string;
  handler: RequestHandler;
};

export default Route;
