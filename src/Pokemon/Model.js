export async function getDetails(data) {
  const { url = false } = data;
  let details = data;
  if (url) {
    const res = await fetch(url);
    details = await res.json();
  }
  return details;
}
