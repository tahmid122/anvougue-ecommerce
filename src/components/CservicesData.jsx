import { TiMessageTyping } from "react-icons/ti";
import { GiMoneyStack } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { GiCursedStar } from "react-icons/gi";

const serviceData = [
  {
    icon: <TiMessageTyping style={{ width: "70px", height: "70px" }} />,
    title: "24/7 Customer Service",
    desc: "We are here to help you with any queastions or concerns you have",
  },
  {
    icon: <GiMoneyStack style={{ width: "70px", height: "70px" }} />,
    title: "14 Day Money Back",
    desc: "We are here to help you with any queastions or concerns you have",
  },
  {
    icon: <GiCursedStar style={{ width: "70px", height: "70px" }} />,
    title: "Our Guarntee",
    desc: "We are here to help you with any queastions or concerns you have",
  },
  {
    icon: <FaShippingFast style={{ width: "70px", height: "70px" }} />,
    title: "Shipping World wide",
    desc: "We are here to help you with any queastions or concerns you have",
  },
];

export default serviceData;
