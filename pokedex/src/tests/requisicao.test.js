test("Retorna status 200 se API estiver disponível", async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const status = response.status;
  expect(status).toBe(200);
});
