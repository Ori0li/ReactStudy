const Price = ({ price, cnt }) => {
  return (
    <span style={{ fontSize: "30px" }}>{cnt == 0 ? price : price * cnt}</span>
  );
};
export default Price;
