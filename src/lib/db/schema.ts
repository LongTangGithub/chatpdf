// The schema define the shape of the database
import { integer, pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'


// Mapping of the db
export const userSystemEnum = pgEnum("user_system_enum", ["system", "user"]);


/**
 * We need a chat table
 * Each chat is one row within the db
 * they contain the name of the pdf
 * the URL to the pdf 
 * the user ID
 * whatever chat is going to hold
 */

export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    pdfName: text('pdf_name').notNull(),
    pdfUrl: text('pdf_url').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    userId: varchar('user_id', {length:256}).notNull(),
    fileKey: text('file_key').notNull(),
})

export const messages = pgTable('messsages', {
    id: serial('id').primaryKey(),
    chatId: integer('chat_id').references(() => chats.id).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    role: userSystemEnum("role").notNull(),
})

// drizzle-orm
// drizzle-kit -> create migration and make sure all databse sync with schema