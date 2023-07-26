import useLocalStorage from "./useLocalStorage.js";

export default function useGeceModu(initialMode = false) {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", false);

  const toggleMode = () => {
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleMode];
}
