import { useState, useEffect } from "react";

/**
 * Custom Hook -> custom hook is a custom hook when you use key word: 'use' before main
 * word, like example below: 'useFetch'. Custom hook is making for reuse
 * funcionality in an app.
 * @param {*} url
 * @returns
 */
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};
