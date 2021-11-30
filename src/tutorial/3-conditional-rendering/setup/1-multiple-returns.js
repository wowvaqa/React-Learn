import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  /**
   * Funkcja fet pobiera obiekt z podanego adresu
   * Możliwe jest zwracanie różnych widoków w zależności od warunków. W poniższym
   * przykładzie komponent zwraca różne widoki zależne od statusu odpowiedzi serwera
   */

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 200) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>ERROR</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
