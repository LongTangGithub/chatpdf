import { neon, neonConfig } from  '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
neonConfig.fetchConnectionCache = true


// If we don't have the Database, show an error
if(!process.env.DATABASE_URL){
    throw new Error('database url not found')
}

// If we do, connect the sql server

const sql = neon(process.env.DATABASE_URL)

// DB calling drizzle
export const db = drizzle(sql);