// This file contains all API-related functions

export async function fetchCharacters(status?: string, gender?: string) {
  let url = "https://rickandmortyapi.com/api/character";
  const params = new URLSearchParams();
  if (status) params.append("status", status);
  if (gender) params.append("gender", gender);
  if (params.toString()) url += `?${params.toString()}`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}
