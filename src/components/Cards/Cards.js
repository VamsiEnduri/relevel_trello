import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
function Cards(props) {
  // const data = [
  //   { id: 1, title: "Title 1", desc: "This is desc for title 1" },
  //   { id: 2, title: "Title 2", desc: "This is desc for title 2" },
  //   { id: 3, title: "Title 3", desc: "This is desc for title 3" },
  //   { id: 4, title: "Title 4", desc: "This is desc for title 4" },
  //   { id: 5, title: "Title 5", desc: "This is desc for title 5" },
  // ];

  const state = useSelector((state) => state.trello);

  const filteredData = state.filter((card) => {
    if (props.input == "") {
      return card;
    } else {
      return card.title.includes(props.input);
    }
  });

  return (
    <div>
      {filteredData.map(function (item, index) {
        return (
          <Card key={index} desc={item.desc} title={item.title} id={item.id} />
        );
      })}
    </div>
  );
}

export default Cards;
