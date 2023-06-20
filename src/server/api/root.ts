import { type inferRouterOutputs } from "@trpc/server";

import { collectionRouter } from "~/src/server/api/routes/collection";
import { exampleRouter } from "~/src/server/api/routes/example";
import { singletonsRouter } from "~/src/server/api/routes/singletons";
import { createTRPCRouter } from "~/src/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  singleton: singletonsRouter,
  collection: collectionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export const trpSSR = appRouter.createCaller({});

export type OutputTypeTRPC = inferRouterOutputs<AppRouter>;
