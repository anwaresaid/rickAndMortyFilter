"use client";

import { fetchCharacters } from "@/services/api";
import useFiltersStore from "@/store/filtersStore";
import { useEffect, useState } from "react";

export function Characters() {
  const { status, gender } = useFiltersStore();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await fetchCharacters(status, gender);
        setData(result);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [status, gender]);

  if (loading) return <div>Loading...</div>;
  if (!data?.results) return <div>No characters found</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {data.results.map((character: any) => (
        <div
          key={character.id}
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
        >
          <img
            className="w-16 h-16 rounded-full"
            src={character.image}
            alt={character.name}
          />
          <div>
            <h2>{character.name}</h2>
            <p>
              {character.status} - {character.species}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
