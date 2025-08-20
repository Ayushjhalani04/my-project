import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const initialImages = [
    { fileName: "jeff.jpg", altText: "Jeff image" },
    { fileName: "sue.jpg", altText: "Emma Stone image" },
    { fileName: "adam.jpg", altText: "Adam Warlock image" },
    { fileName: "hela.jpg", altText: "Hela image" },
    { fileName: "ironman.jpg", altText: "Iron Man image" },
    { fileName: "luna.jpg", altText: "Luna Snow image" },
    { fileName: "strange.jpg", altText: "Dr. Strange image" },
    { fileName: "emma.jpg", altText: "Sue Storm image" },
  ];

  const [images, setImages] = useState(initialImages); // Move images to state
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedItem, setClickedItem] = useState([]);

  const handleCardClick = (altText) => {
    console.log(`${altText}`);
    if (clickedItem.includes(altText)) {
      setBestScore((prevBest) => Math.max(prevBest, currentScore));
      setCurrentScore(0);
      setClickedItem([]);
    } else {
      setCurrentScore((prevScore) => prevScore + 1);
      setClickedItem((prevItems) => [...prevItems, altText]);
    }
    shuffleImages(); // Shuffle images after every click
  };

  const shuffleImages = () => {
    setImages((prevImages) => {
      const shuffled = [...prevImages];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div className="grid-layout">
        {images.map((image, index) => (
          <Card
            key={index}
            src={`/assets/${image.fileName}`}
            alt={image.altText}
            onClick={() => handleCardClick(image.altText)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
