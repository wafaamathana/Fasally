import { useEffect, useState } from "react";
import { getHomeData } from "../services/home.service";

export const useHomeData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHomeData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
