import pg from "pg"

const {Client} = pg

const dbhost = process.env.DATABASE_HOST || "localhost";
const dbuser = process.env.DATABASE_USER || "postgres";
const dbport = parseInt(process.env.DATABASE_PORT ?? "5432");
const dbpassword = process.env.DATABASE_PASSWORD || "admin";
const dbname = process.env.DATABASE_DB_NAME || "sistemadelogin";



export const client = new Client({
    host: dbhost,
    user: dbuser,
    port:  dbport,
    password: dbpassword,
    database: dbname
})




