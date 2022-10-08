import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /*  When you depend on the previous state way use one UseState instead
  in the handler methods be carefule not to lose the values of the other properties
  for this reason we use ...previousState to keep the others and change only the one we want.
    const [userInput, setUserInput] = useState({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    const titleChangeHandler = (event) => {
      setUserInput((previousState) => {
          return {
              ...previousState,
              enteredTitle: event.target.value,
          }
      });
    };

    const amountChangeHandler = (event) => {
      setUserInput((previousState) => {
          return {
              ...previousState,
              enteredAmount: event.target.value,
          }
      });
    };

    const dateChangeHandler = (event) => {
      setUserInput((previousState) => {
          return {
              ...previousState,
              enteredDate: event.target.value,
          }
      });
    }; */

  const submitFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      // enforce string to number conversion
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };

  const cancelHandler = () =>{
    props.onCancel();
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
