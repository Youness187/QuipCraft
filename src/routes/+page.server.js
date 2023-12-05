
export async function load({url}) {
  const res = await fetch("https://quote-garden.onrender.com/api/v3/quotes?limit=12&" + url.searchParams);

  return {
    post: await res.json()
  };
}
