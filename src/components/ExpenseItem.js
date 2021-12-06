import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Amount from "./Amount";
import Card from "./Card";

const ExpenseItem = (props) => {

  // const clickHandler = () => {
  //   if(title === 'Updated!'){
  //     setTitle(props.title)
  //   }else{
  //     setTitle('Updated!')
  //   }
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">
            $<Amount amount={props.amount} />
          </div>
        </div>
        {/* <button onClick={clickHandler}>Change Style!</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
