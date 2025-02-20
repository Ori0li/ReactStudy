// 내가 한 거
// const Price = (props) => {
//   const discount = props.price - props.price * props.discount;
//   const won = +discount * 1420;

//   return (
//     <>
//       <div style={{ display: "flex", gap: "20px" }}>
//         <p>{props.price.toFixed(2)}</p>
//         <p style={{ color: "red" }}>${discount.toFixed(2)}</p>
//         <p>({Math.round(won)})</p>
//       </div>
//     </>
//   );
// };

// export default Price;

const Price = (props) => {
  const { price, discount } = props;
  const discountPrice = (price * (100 - discount)) / 100;
  const won = discountPrice * 1400;

  return (
    <>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <p style={{ textDecorationLine: "line-through", fontSize: "12px" }}>
          {props.price.toFixed(2)}
        </p>
        <p style={{ color: "red", fontWeight: "bold" }}>
          ${discountPrice.toFixed(2)}
        </p>
        <p style={{ color: "grey", fontSize: "14px" }}>
          ({Math.round(won).toLocaleString()})
        </p>
      </div>
    </>
  );
};

export default Price;
