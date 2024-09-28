import { createHashRouter } from "react-router-dom";
import { routeStack } from "./routeStack";

export const router = createHashRouter(routeStack);
