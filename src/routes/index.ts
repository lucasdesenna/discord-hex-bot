import configs from "configs";
import express, { RequestHandler } from "express";
import adminRoute from "./admin";
import { NodeEnv } from "configs/server";
import Route from "types/Route";
import { ApiError } from "utils/api";
import httpStatus from "http-status";
import { blueText, greenText } from "utils/text";
import System from "types/System";

const router = express.Router();

const defaultRoutes: Route[] = [
  {
    path: "/admin",
    handler: adminRoute,
  },
];

const devRoutes: Route[] = [
  // routes available only in development mode
  //   {
  //     path: "/docs",
  //     handler: docsRoute,
  //   },
];

const useRoute = (route: Route) => router.use(route.path, route.handler);

defaultRoutes.forEach(useRoute);

const missingRouteHandler: RequestHandler = (req, _res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, `Not found: ${req.route}`));
};

if (configs.SERVER.NODE_ENV === NodeEnv.DEVELOPMENT)
  devRoutes.forEach(useRoute);

export const registerRestApiRoutes = ({ expressApp }: System) => {
  console.log(blueText("Registering REST API routes..."));

  expressApp.use(router);
  expressApp.use(missingRouteHandler);

  expressApp.listen(configs.SERVER.PORT, () => {
    console.log(greenText(`Listening on port ${configs.SERVER.PORT}`));
  });
};

export default router;
