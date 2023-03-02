import { useState } from "react";
import "./App.css";

const App = () => {
  const INTIAL = [
    { id: 1, txt: "react를 배워봅시다" },
    { id: 2, txt: "useState를 배워봅시다" },
  ];
  const [card, setCard] = useState(INTIAL);
  const [text, setText] = useState("");

  const cardClickAdd = () => {
    const newcard = {
      id: card.length + 1,
      txt: text,
    };
    setCard([...card, newcard]);
  };
  return (
    <>
      <div>
        <div className="serch">
          <input
            placeholder="자바스크립트를 배워봅시다."
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button onClick={cardClickAdd}>추가하기</button>
        </div>

        <div className="boxWrap">
          {card.map((item) => {
            return (
              <div key={item.id} className="box">
                {item.txt}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
