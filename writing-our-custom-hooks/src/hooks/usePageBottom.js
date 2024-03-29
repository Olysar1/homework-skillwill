import { useState, useEffect } from "react";

const usePageBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //   console.log(
      //     document.documentElement.getBoundingClientRect().bottom,
      //     window.innerHeight
      //   );

      if (
        document.documentElement.getBoundingClientRect().bottom <=
        window.innerHeight
      ) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return isBottom;
};

export default usePageBottom;
