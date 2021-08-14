// Now creating component for feaching data copy from app.js and importing in APP.JS
import React from "react";
import "./Card-list.style.css";
import { Card} from "../Card/Card.component";

export const CardList = props => {
  return(
  <div className="user-list">
  {props.Monster.map(Monster => (
    <Card key={Monster.id} Monster={Monster}/>
  ))}
  </div>
  )};
