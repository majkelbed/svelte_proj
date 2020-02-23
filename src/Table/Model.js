export async function getItems(
  url = "https://pokeapi.co/api/v2/pokemon?limit=10"
) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
