/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();
  await knex("users").insert([
    { id: 1, name: "Yokomoto" },
    { id: 2, name: "Karagi" },
    { id: 3, name: "Tanaka" },
  ]);
};
