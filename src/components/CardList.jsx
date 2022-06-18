import React, { useState, useEffect } from "react";
import Card from "./Card";
const CardList = () => {
  const [cardData, setCardData] = useState([]);
  const dataURL = "./data/cardData.json";

  useEffect(() => {
    (async () => {
      const reponse = await fetch(dataURL);
      const json = await reponse.json();
      setCardData(json);
    })();
  }, []);
  /* useEffect(() => {
    axios
      .get(dataURL)
      .then((res) => res.data)
      .then((data) => setCardData(data))
      .catch((error) => console.log(error));
  }, []); */
  return (
    <div className="card_area">
      <h3>CardList</h3>
      <ul className="card_wrap">
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
