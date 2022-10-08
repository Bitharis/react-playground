import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2019");
  
  // handle filter chagnes
  const filterChangedHandler = (filter) => {
    setSelectedFilter(filter.year); 
  };

  // filter out the items
  const filteredExpenses = props.data.filter(expenseItem => {
    return expenseItem.date.getFullYear().toString() === selectedFilter || selectedFilter === ""
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedFilter} OnFilterChanged={filterChangedHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
