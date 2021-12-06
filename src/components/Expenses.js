import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYearr, setSelectedYear] = useState("2020");
  const recieveFilteredYear = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYearr
  );

  return (
    <div>
      <ExpensesFilter
        selected={selectedYearr}
        getFilteredYear={recieveFilteredYear}
      />
      <ExpensesList items={filteredExpenses}/>
    </div>
  );
};

export default Expenses;
