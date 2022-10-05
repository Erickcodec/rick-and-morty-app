import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

const URL = "https://rickandmortyapi.com/api/location/";

function useLocation(params = {}) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(URL, {
          params,
        });

        const { results } = res.data;

        setLocations(results);
      } catch (error) {
        if (error instanceof AxiosError) {
          const { response } = error;

          if (response.status == 404) {
            setLocations([]);
          }
        }
      }
    })();
  }, [params]);

  return {
    locations,
  };
}

export default useLocation;
