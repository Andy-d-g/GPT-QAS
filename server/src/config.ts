import * as dotenv from "dotenv";
import { z } from "zod";
dotenv.config();

const configSchema = z.object({
  apiKey: z.string(),
  endpoint: z.string(),
  model: z.string(),
});

export default configSchema.parse({
  apiKey: process.env.OPENAI_API_KEY,
  endpoint: process.env.OPENAI_ENDPOINT,
  model: process.env.OPENAI_MODEL,
});
