import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const cancelHandler = () => {
    setShowForm(false);
  }

  let NewExpenseContent =
    showForm === false ? (
      <div className="new-expense__actions">
        <button onClick={showFormHandler}>Add New Expense</button>
      </div>
    ) : (
      <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />
    );

  return <div className="new-expense">{NewExpenseContent}</div>;
};

export default NewExpense;
