import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
// const UserShape = z.object({
//   id: z.number(),
//   name: z.string(),
//   username: z.string(),
//   email: z.string(),
// });

// export type User = z.infer<typeof UserShape>;

export const userRouter = router({
  getUsers: publicProcedure.query(async () => {
    return await prisma.user.findMany({});
  }),
});
