import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:mRQ68VTnpjsq@ep-cold-snowflake-a592dyz7.us-east-2.aws.neon.tech/Cancer_Cure?sslmode=requiree"
);
export const db = drizzle(sql, { schema });
