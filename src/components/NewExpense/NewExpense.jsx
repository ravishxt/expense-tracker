import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../css/NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveEnteredDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <React.Fragment>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add Expense</button>
          )}
        {isEditing && (
          <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveEnteredData={saveEnteredDataHandler}
          />
          )}
          </div>
    </React.Fragment>
  );
};

export default NewExpense;
