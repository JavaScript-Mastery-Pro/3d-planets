import { useEffect } from "react";
import { useParams } from "react-router-dom";

/**
 * useScrollToTop — scrolls the window to the top whenever the route :id param changes.
 */
export const useScrollToTop = () => {
  const { id } = useParams();

  // Scroll to top on route param change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
};
