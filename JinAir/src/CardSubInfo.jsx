import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";

const CardSubInfo = (props) => {
  const subInfoData = [
    {
      id: "charge",
      icon: <FaMoneyBillWave />,
      keyTitle: "변경수수료",
      valueTitle: props.charge,
    },
    {
      id: "penalty",
      icon: <FaCreditCard />,
      keyTitle: "환불 위약금",
      valueTitle: props.penalty,
    },
    {
      id: "checkedBaggage",
      icon: <LuBaggageClaim />,
      keyTitle: "무료 위탁 수화물",
      valueTitle: props.checkedBaggage,
    },
    {
      id: "cabinBaggage",
      icon: <FaBagShopping />,
      keyTitle: "변경수수료",
      valueTitle: props.cabinBaggage,
    },
  ];

  return (
    <section>
      {subInfoData.map((v) => {
        const { id, icon, keyTitle, valueTitle } = v;
        return (
          <>
            <div
              id={id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <span>
                {icon} {keyTitle}
              </span>
              <span>KRW {valueTitle}</span>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default CardSubInfo;
