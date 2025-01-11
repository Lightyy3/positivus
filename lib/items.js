import sql from "better-sqlite3";

const db = sql("items.db");

export function getItems() {
  return db.prepare("SELECT * FROM items").all();
}

export function saveItem(item) {
  db.prepare(
    `
        INSERT INTO items
          (name, email, service, details, budget)
        VALUES (
          @name,
          @email,
          @service,
          @details,
          @budget
        )
      `
  ).run(item);
}

// export function deleteItem(id) {
//   return db.prepare("DELETE FROM items WHERE id = ?", id).run(id);
// }
