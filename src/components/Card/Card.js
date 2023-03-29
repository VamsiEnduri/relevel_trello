import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../state/actions/Action";

function Card(props) {
  const dispatch = useDispatch();
  const Remove = (id) => {
    dispatch(deleteCard(id));
    console.log(id);
  };
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <span>
        <button
          onClick={() => {
            const dlte = window.confirm("Do you wanna delte card?");
            if (dlte) {
              Remove(props.id);
            }
          }}
        >
          Delete
        </button>
      </span>
    </div>
  );
}

export default Card;
