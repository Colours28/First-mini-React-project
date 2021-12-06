const Amount = (props) => {
  return(
      <div>
        <h1>{props.amount / 2}</h1>
        <h2>{props.amount}</h2>
      </div>
  );
}

export default Amount;