import CardInfo from "./CardInfo";
import CardSubInfo from "./CardSubInfo";

const MakeCard = () => {
  const cardData = [
    {
      rate: "수퍼로우",
      price: "",
      sit: "-",
      charge: 60000,
      penalty: 100000,
      checkedBaggage: 15,
      cabinBaggage: 10,
    },
    {
      rate: "플렉스",
      price: "294200",
      sit: "9석",
      charge: 40000,
      penalty: 100000,
      checkedBaggage: 15,
      cabinBaggage: 10,
    },
    {
      rate: "지니",
      price: "419200",
      sit: "9석",
      charge: 20000,
      penalty: 700000,
      checkedBaggage: 15,
      cabinBaggage: 10,
    },
  ];

  return (
    <>
      {cardData.map((v) => {
        return (
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              width: "300px",
            }}
          >
            <CardInfo {...v} />
            <CardSubInfo {...v} />
          </div>
        );
      })}
    </>
  );
};

export default MakeCard;
