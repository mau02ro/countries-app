import { useState, useMemo } from "react";

function useFilter(data) {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("Americas");
  const [filterData, setFilterData] = useState(data);
  useMemo(() => {
    let f_r = (() => {
      if (region !== "all") {
        return data.filter((item) => item.region === region);
      }
      return data;
    })();
    const result = f_r.filter((item) => {
      return `${item.name}`.toLowerCase().includes(name.toLowerCase());
    });

    setFilterData(result);
  }, [data, name, region]);

  return { name, setName, setRegion, region, filterData };
}

export default useFilter;
