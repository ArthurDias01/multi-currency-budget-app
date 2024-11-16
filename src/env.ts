/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-namespace */
import { z } from "zod";

const envVariables = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
});

export type Env = z.infer<typeof envVariables>;

export const env = envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
