const sql = require("better-sqlite3");
const db = sql("items.db");

const dummyItems = [
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    service: "Content Creation",
    details: "A simple YouTube video",
    budget: "300$",
  },
  {
    name: "Jane Do",
    email: "janedoe@gmail.com",
    service: "Content Creation",
    details: "A simple Vine video",
    budget: "400$",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS items (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       email TEXT NOT NULL,
       service TEXT NOT NULL,
       details TEXT NOT NULL,
       budget TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO items VALUES (
         null,
         @name,
         @email,
         @service,
         @details,
         @budget
      )
   `);

  for (const item of dummyItems) {
    stmt.run(item);
  }
}

initData();
