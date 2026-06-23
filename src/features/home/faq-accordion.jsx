"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={question}>
            <button
              type="button"
              className="faq-item__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              {question}
              <Plus size={18} />
            </button>
            <div className="faq-item__answer">
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
