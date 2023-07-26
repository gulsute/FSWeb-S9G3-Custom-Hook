import { useState } from "react";

export default function useGeceModu() {
  const [geceModu, setGeceModu] = useState(false);

  const toggleMode = () => {
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleMode];
}
