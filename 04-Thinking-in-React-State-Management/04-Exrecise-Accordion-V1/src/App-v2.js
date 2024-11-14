import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus",
  },
  {
    title: "How long do I have to retrun my chair?",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia consequat montes amet; sollicitudin odio fringilla. Massa interdum hac proin",
  },
  {
    title: "Do you ship to countries the EU?",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula congue est accumsan mus inceptos. Eros semper magna finibus consectetur adipiscing",
  },
];

export default function App() {
  return (
    <div className="App">
      <div>
        <Accordion data={faqs} />
      </div>
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={index}
          title={faq.title}
          key={index}
        >
          {faq.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={99}
        title="JUDUL"
        key="{index}"
      >
        <p>Penjelasan</p>
        <ul>
          <li>macam macam penjelasan</li>
          <li>macam macam penjelasan</li>
          <li>macam macam penjelasan</li>
          <li>macam macam penjelasan</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  const handleToggle = function () {
    onOpen(!isOpen ? num : null);
  };

  return (
    <>
      <div
        className={`item ${isOpen ? "open" : ""}`}
        onClick={() => handleToggle(num)}
      >
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>

        {isOpen && <div className="content-box">{children}</div>}
      </div>
    </>
  );
}

/*
$ INGAT PROSES 3 LANGKAH useState:
? 1. Devinded (mendefinisikan)
  const [isOpen, setIsOpen] = useState(false);
? 2. Menggunakannya
? 3. Memperbaharuinya


*/
