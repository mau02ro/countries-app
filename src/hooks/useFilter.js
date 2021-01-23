import { useState, useMemo } from "react";

function useFilter(data) {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("All");
  const [filterData, setFilterData] = useState(data);
  useMemo(() => {
    let f_r = (() => {
      if (region.toLowerCase() !== "all") {
        return data.filter(
          (item) => item.region.toLowerCase() === region.toLowerCase()
        );
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
