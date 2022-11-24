import { useEffect, useState } from "react";

function App() {
  const [framePosition, setFramePosition] = useState(200);
  const [currentP, setCurrentP] = useState(0);

  useEffect(() => {
    const frame = document.querySelectorAll('.frame>div>div');
    frame[currentP].style.opacity = 1;
    frame[currentP].style.transition = 'opacity 2s';
  }, [currentP])

  const handleSlide = (dir) => {
    const frame = document.querySelectorAll('.frame>div>div');
    if (dir == 'left' && framePosition < 200) {
      frame[currentP].style.transition = 'opacity 0.5s';
      frame[currentP].style.opacity = 0;
      let temp = framePosition;
      temp += 100;
      setFramePosition(temp);
      temp = currentP;
      temp -= 1;
      setCurrentP(temp);
    } else if (dir == 'right' && framePosition > -200) {
      frame[currentP].style.transition = 'opacity 0.5s';
      frame[currentP].style.opacity = 0;
      let temp = framePosition;
      temp -= 100;
      setFramePosition(temp);
      temp = currentP;
      temp += 1;
      setCurrentP(temp);
    }
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Welcome to my <br className="mobile" /> portfolio!</h1>
        <div className="info">
          <div className="slide left"><button onClick={() => handleSlide('left')}>left</button></div>
          <div className="frame">
            <div style={{transform: `translateX(${framePosition}vw)`}}>
              <div>
                <p>My name is Andrew. I am a self taught website developer. I'm experienced with three coding languages, including: Javascript, CSS and HTML. I also have experience with ReactJS.</p>
              </div>
              <div>
                <p>I'm 22 years old. I started learning web-development about one and a half year ago. It has become a passion of mine. It's one of the most satisfying experiences when you have your finishing touch on your new app. Truly amazing.</p>
              </div>
              <div>
                <p>And here is some not work related info... I wouldn't call myself a musician yet but I have a really high passion for that as well. Actually I did create a few songs already. Although I want to take it to the next level in the future.</p>
              </div>
              <div>
                <p>I really like nature as well and its calming effect on me. I also practice yoga and meditation. I'd call myself quite a spiritual person.</p>
              </div>
              <div>
                <p>I think that coding is suited for me. Even though I have some spiritual traits I still consider myself a logical person. Website development is good because on one side you can solve problems with logic and on the other side you can express your creativity with the UI.</p>
              </div>
            </div>
          </div>
          <div className="slide right"><button onClick={() => handleSlide('right')}>right</button></div>
        </div>
      </div>
    </div>
  );
}

export default App;
