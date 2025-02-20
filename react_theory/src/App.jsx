import Service from "./Service";
import { FaHotel, FaCar, FaWifi } from "react-icons/fa";
import { CiShoppingBasket, CiCreditCard1 } from "react-icons/ci";
import { BsBalloon } from "react-icons/bs";

function App() {
  const iconData = [
    { icon: <FaHotel />, serviceName: "호텔" },
    { icon: <FaCar />, serviceName: "렌터카" },
    { icon: <CiShoppingBasket />, serviceName: "공항 편의" },
    { icon: <BsBalloon />, serviceName: "액티비티" },
    { icon: <CiCreditCard1 />, serviceName: "금융 여행자보험" },
    { icon: <FaWifi />, serviceName: "OTT & WIFI" },
  ];

  return (
    <section style={{ display: "flex", gap: "20px" }}>
      {iconData.map((v) => (
        <Service {...v} />
      ))}
    </section>
  );
}

export default App;
