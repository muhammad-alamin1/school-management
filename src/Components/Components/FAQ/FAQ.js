import React from "react";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        <h5>{faq.title}</h5>
        <small>{faq.date}</small>
      </div>
      <div className="faq-answer">{faq.message}</div>
    </div>
  );
}

export default FAQ;
