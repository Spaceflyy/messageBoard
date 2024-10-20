#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();
const SQL = `
SET TIME ZONE 'Europe/London';

CREATE TABLE IF NOT EXISTS messages( 
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    title VARCHAR (255), 
    text VARCHAR (255), 
    username VARCHAR (255),
    posting_date TIMESTAMP DEFAULT NOW()::timestamp NOT null);

INSERT INTO messages (title, text, username)
VALUES
    ('Something to say','Hi there! this is my first message here, just wanted to say hello :)','Amando'),
    ('An important update!','Hello World!','Charles');
`;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: process.env.DB_HOST,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();
