import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../css/ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <React.Fragment>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">₹ {props.amount}</div>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ExpenseItem;
