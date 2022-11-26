import { useEffect, useState } from "react";
import cat_room from './images/cat-room.png';
import snake_game from './images/snake-game.png';
import etch_a_sketch from './images/etch-a-sketch.png';
import calculator from './images/calculator.png';
import arrow from './images/arrow.svg';
import exclamation from './images/exclamation.svg'

function App() {
  const [framePosition, setFramePosition] = useState(0);
  const [projectFramePosition, setProjectFramePosition] = useState(0);

  const handleSlide = (dir) => {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    if (dir == 'left' && framePosition < 0) {
      let temp = framePosition+100;
      right.style.display = '';
      if (temp == 0) {
        left.style.display = 'none';
      }
      setFramePosition(temp);
    } else if (dir == 'right' && framePosition > -400) {
      let temp = framePosition-100;
      left.style.display = '';
      if (temp == -400) {
        right.style.display = 'none';
      }
      setFramePosition(temp);
    }
  };

  const handleProjectSlide = (dir) => {
    const left = document.querySelector('.projects .left');
    const right = document.querySelector('.projects .right');

    if (dir == 'left' && projectFramePosition < 0) {
      let temp = projectFramePosition+100;
      right.style.display = '';
      if (temp == 0) {
        left.style.display = 'none';
      }
      setProjectFramePosition(temp);
    } else if (dir == 'right' && projectFramePosition > -300) {
      let temp = projectFramePosition-100;
      left.style.display = '';
      if (temp == -300) {
        right.style.display = 'none';
      }
      setProjectFramePosition(temp);
    }
  }

  return (
    <div className="App">
      <div className="content">
        <div className="first-grid">
          <div>
            <h1>Welcome to my <br className="mobile" /> portfolio!</h1>
            <div className="slider first">
              <div className="slide left" style={{display: 'none'}}><button onClick={() => handleSlide('left')}><img src={arrow} alt="" /></button></div>
              <div className="frame first">
                <div style={{transform: `translateX(${framePosition}%)`}}>
                  <div className="padding first">
                    <div>
                      <p>Hello! My name is Andrew. I'm 22 years old. I live in Hungary. I started learning web-development because I always liked IT. I love building layouts and then making them interactive. Motion is the most exciting part of web development for me.</p>
                    </div>
                  </div>
                  <div className="padding first">
                    <div>
                      <p>I started learning web-development about one and a half year ago. It has become a passion of mine. It's one of the most satisfying experiences when you have your finishing touch on your new app. Truly amazing.</p>
                    </div>
                  </div>
                  <div className="padding first">
                    <div>
                      <p>And here is some not work related info... I wouldn't call myself a musician yet but I have a really high passion for that as well. Actually I did create a few songs already. Although I want to take it to the next level in the future.</p>
                    </div>
                  </div>
                  <div className="padding first">
                    <div>
                      <p>I really like nature as well and its calming effect on me. I also practice yoga and meditation. I'd call myself quite a spiritual person. Even though I love nature I think that technology is a very useful thing and can be used for good purpose.</p>
                    </div>
                  </div>
                  <div className="padding first">
                    <div>
                      <p>I think that coding is suited for me. Although I have some spiritual traits I still consider myself a logical person. Website development is good because on one side you can solve problems with logic and on the other side you can express your creativity with the UI.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide right"><button onClick={() => handleSlide('right')}><img src={arrow} alt="" /></button></div>
            </div>
          </div>
        </div>
        <div className="second-grid">
          <div className="projects">
            <div className="title">
              <div className="exclamation">
                <div><img src={exclamation} alt="" /></div>
                <p>Note: My first two projects are also responsive. I consider those my best work so far. Although I still want to improve on the styling in the snake game. Either way I really hope that you will like my creations.</p>
              </div>
              <h2>My projects:</h2>
            </div>
            <div className="slider second">
              <div className="left slide" style={{display: 'none'}}><button onClick={() => handleProjectSlide('left')}><img src={arrow} alt="" /></button></div>
              <div className="frame second">
                <div style={{transform: `translateX(${projectFramePosition}%)`}}>
                  <div className='padding second'>
                    <div className="project">
                      <div className="img-holder">
                        <a href="https://jr-kick.github.io/cat-room"><h2>Cat Room</h2><img src={cat_room} alt="" /></a>
                        <div><p>HTML, CSS, Javascript, React</p></div>
                      </div>
                    </div>
                  </div>
                  <div className='padding second'>
                    <div className="project">
                      <div className="img-holder">
                        <a href="https://jr-kick.github.io/snake-game"><h2>Snake Game</h2><img src={snake_game} alt="" /></a>
                        <div><p>HTML, CSS, Javascript</p></div>
                      </div>
                    </div>
                  </div>
                  <div className='padding second'>
                    <div className="project">
                      <div className="img-holder">
                        <a href="https://jr-kick.github.io/calculator"><h2>Etch-A-Sketch</h2><img src={etch_a_sketch} alt="" /></a>
                        <div><p>HTML, CSS, Javascript</p></div>
                      </div>
                    </div>
                  </div>
                  <div className='padding second'>
                    <div className="project">
                      <div className="img-holder">
                        <a href="https://jr-kick.github.io/etch_a_sketch"><h2>Calculator</h2><img src={calculator} alt="" /></a>
                        <div><p>HTML, CSS, Javascript</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right slide"><button onClick={() => handleProjectSlide('right')}><img src={arrow} alt="" /></button></div>
            </div>
          </div>
        </div>
        <div className="third-grid">
          <div>
              <h2>Experience:</h2>
            <div>
              <p>I have experience with the technologies which I used for my projects. So the list goes: HTML, CSS, Vanilla Javascript and ReactJS. I learned them in this order as well. That's why I only used React for the Cat Room app which is by far my best one yet. (I'm also using React for this portfolio right now.) I also had some insight into Redux while making the Cat Room app and I also have a bit of experience with Webpack, some plugins and the Terminal as well. I tried to use some image editors for logos too. I use Windows since I can't install Ubuntu on my laptop I own at the moment but first I started my journey with Ubuntu.</p>
              <p>I'm a self taught developer. I don't have any proof of my knoweledge but I have put many hours into IT related things let alone web development. I'm taking this very seriously and intend to make good work in this field.</p>
              <p>Maybe the only qualification that's relevant and I should mention is my advanced english exam I took at the end of my High School years. I wouldn't say I'm native but I'm trying my best and I have some good basics.</p>
            </div>
          </div>
        </div>
        <div className="fourth-grid">
          <div className="contact">
            <h2>Contact Info:</h2>
            <div>
              <div>
                <p>Github:</p>
                <a href="https://github.com/jr-kick"><p>https://github.com/jr-kick</p></a>
                <p>Email:</p>
                <p>kickandris@gmail.com</p>
              </div>
              <div>
                <p>Discord:</p>
                <p>kickapp#1970</p>
                <p>Phone Number:</p>
                <p>+36 30 645 9935</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
