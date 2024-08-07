import React, { useState } from "react";
import UnisversalPtop from "./UnisversalPtop";
import { MdKeyboardArrowRight } from "react-icons/md";
import faqDatas from "./FaqDatas";
const faqOptions = [
  "How To Buy",
  "Payment Methods",
  "Delivery",
  "Exchanges & Returns",
  "Registration",
  "Look After Your Garments",
  "Contacts",
];

const Faqs = () => {
  const [isActiveId, setisActiveId] = useState("How To Buy");
  const [isShow, setisShow] = useState(true);
  const [matchIndex, setmatchIndex] = useState(null);
  const initialData = faqDatas.filter((faq) => {
    return faq.name === "How To Buy";
  });
  const [initialShow, setinitialShow] = useState(initialData);
  const filteredData = (faqName) => {
    let filtered = faqDatas.filter((finalFaq) => {
      return finalFaq.name === faqName;
    });
    setinitialShow(filtered);
  };
  return (
    <section id="faq">
      <UnisversalPtop pageName="FAQ" />
      <div className="faqs">
        <div className="faq-left">
          <ul>
            {faqOptions.map((faq, index) => {
              return (
                <li
                  key={index}
                  id={isActiveId === faq ? "faq-active" : null}
                  onClick={() => {
                    setisActiveId(faq);
                    filteredData(faq);
                  }}
                >
                  {faq}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="faq-right">
          {initialShow.map((faqData, index) => {
            const { name, title, desc } = faqData;
            return (
              <div
                className="s-faq"
                key={index}
                onClick={() => {
                  setmatchIndex(index);
                  matchIndex === index ? setisShow(!isShow) : setisShow(false);
                }}
              >
                <div className="fr-top">
                  <h5>{title}</h5>

                  <MdKeyboardArrowRight style={{ fontSize: "40px" }} />
                </div>
                <div className="fr-bottom">
                  <p
                    style={{
                      textAlign: "start",
                      marginTop: "10px",
                      opacity: "0.7",
                    }}
                    className={`${matchIndex === index ? null : "hideFaq"} ${
                      isShow ? "hideFaq" : null
                    }`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
