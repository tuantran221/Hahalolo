import React, { useState, useEffect } from "react";

function useWindowScrollPositions(props) {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    function updatePosition() {
      setScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
      console.log('Updated')
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}

export default useWindowScrollPositions;
