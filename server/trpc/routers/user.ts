import { z } from "zod";
import { publicProcedure, router } from "../trpc";

// const UserShape = z.object({
//   id: z.number(),
//   name: z.string(),
//   username: z.string(),
//   email: z.string(),
// });

// export type User = z.infer<typeof UserShape>;

export const userRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});
