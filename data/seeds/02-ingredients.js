exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("ingredients").insert([
    {
      name: "Teal"
    },
    {
      name: "Aquamarine"
    },
    {
      name: "Turquoise"
    },
    {
      name: "Blue"
    },
    {
      name: "Violet"
    }
  ]);
};
