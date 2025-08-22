const WP_BASE = import.meta.env.VITE_WP_BASE_URL?.replace(/\/$/, '') || ''
const API = `${WP_BASE}/wp-json/wp/v2`
async function fetchJSON(url){ const res = await fetch(url, { headers: { 'Accept': 'application/json' } }); if(!res.ok){ const text = await res.text().catch(()=>''); throw new Error(`WP REST request failed: ${res.status} ${text}`) } return res.json() }
export async function getPosts({ page = 1, perPage = 6 } = {}){ return fetchJSON(`${API}/posts?per_page=${perPage}&page=${page}&_embed`) }
export async function getPostBySlug(slug){ const data = await fetchJSON(`${API}/posts?slug=${encodeURIComponent(slug)}&_embed`); return data?.[0] || null }
export async function getProjects({ page = 1, perPage = 12 } = {}){ return fetchJSON(`${API}/projects?per_page=${perPage}&page=${page}&_embed`) }
export async function getProjectBySlug(slug){ const data = await fetchJSON(`${API}/projects?slug=${encodeURIComponent(slug)}&_embed`); return data?.[0] || null }
export async function getServices({ page = 1, perPage = 12 } = {}){ return fetchJSON(`${API}/services?per_page=${perPage}&page=${page}&_embed`) }
export async function getServiceBySlug(slug){ const data = await fetchJSON(`${API}/services?slug=${encodeURIComponent(slug)}&_embed`); return data?.[0] || null }