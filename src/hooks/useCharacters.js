import axios from "axios";
import { useEffect, useState } from "react";

export default function useCharacters(location) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location) {
      (async function () {
        const residentsUrl = location.residents;

        setLoading(true);
        const residentsProms = residentsUrl.map((resident) =>
          axios.get(resident)
        );
        const allResults = await Promise.all(residentsProms);
        const characters = allResults.map(({ data }) => data);

        setLoading(false);
        setCharacters(characters);
      })();
    }
  }, [location]);

  return {
    characters,
    loading,
  };
}
