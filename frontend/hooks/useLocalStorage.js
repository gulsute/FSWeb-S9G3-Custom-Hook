import React, { useEffect, useState } from "react";

function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, data);
    } else {
      const lsData = JSON.parse(localStorage.getItem(key));
      setData(lsData);
    }
  }, [data]);

  const aktarLocalS = (yeniData) => {
    localStorage.setItem(key, JSON.stringify(yeniData));
    setData(yeniData);
  };

  return [data, aktarLocalS];
}

export default useLocalStorage;
