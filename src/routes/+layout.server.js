
export async function load() {
    const res = await fetch("https://quote-garden.onrender.com/api/v3/genres");
    return {
		post: await res.json()
	};    
}