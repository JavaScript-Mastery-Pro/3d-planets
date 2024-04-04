import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ScrollToTop = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
};

export default ScrollToTop;
