app.get('/admin/member', async (req, res) => {
  const results = await knex("member").select();
  res.json(results);
});

app.post("/admin/member", async (req, res) => {
  const data = req.body

  const results = await knex("member").insert({
    name: data.name,
    address: data.address,
    phone: data.phone,
  })

  res.json(results)
});

app.delete("/admin/member/:id", async (req, res) => {
  const primaryKey = req.params.id
  
  const results = await knex("member").where("id", primaryKey).del();
  res.json(results)
});

app.put("/admin/member/:id", async (req, res) => {
  const primaryKey = req.params.id
  const data = req.body
  
  const results = await knex("member").where("id", primaryKey).update({
    name: data.name,
    address: data.address,
    phone: data.phone,
  });
  res.json(results)
});