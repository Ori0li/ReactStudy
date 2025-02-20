const Sausage = (props) => {
  return (
    <button style={{ color: props.color || "pink" }}>
      {props.name || "군필"} 소세지
    </button>
  );
};

export default Sausage;
