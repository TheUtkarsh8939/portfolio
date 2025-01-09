<div class="about">
  <div class="w-screen flex flex-col-reverse items-center">
    <div class="p-[2px] rounded-3xl flex justify-center w-4/5 fancy">
      <div
        class="start bg-black rounded-3xl flex sm:flex-col p-8 items-center gap-9 z-50 w-full"
      >
        <img src="./me-abt.jpeg" alt="" class="me w-24 h-24 rounded-full" />
        <div class="abt">
          <h2>Utkarsh Chandel</h2>
          <p>
            ^_^ <br /> Hi, I am Utkarsh. I am still learning how the world works,
            but during these times, I have shown the world that I know of that age
            is just a number, real thing is your ambition.
          </p>
        </div>
      </div>
    </div>
    <div class="shadow-lights blur-xl absolute h-10 w-4/5 -z-10"></div>
  </div>
  <div class="journey w-screen">
    <div class="timeline">
      <div class="containr left-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>The First Spark</h2>
          <small>July 2020</small>
          <p>
            COVID-19 was there, the lockdowns were on place. I found myself
            alone in the house with a phone sideby, I decided to search the
            question "How to make Google." Which would lead me to youtube where
            for the next 15 days I followed the tutorials and made my first
            project, a search engine
          </p>
          <span class="left-container-arrow"></span>
        </div>
      </div>

      <div class="containr right-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>The PHP Phase</h2>
          <small>August 2020 - January 2021</small>
          <p>
            During these times, I made many small sideprojects using PHP like
            E-Commerce Websites, Food odering websites, Admin panels, etc.
          </p>
          <span class="right-container-arrow"></span>
        </div>
      </div>
      <div class="containr left-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>Discovering Python</h2>
          <small>2021</small>
          <p>
            I discovered Python these months, which allowed me to make many
            small scripts to automate many of my tasks, And it is still the
            language of my choice for scripting these days
          </p>
          <span class="left-container-arrow"></span>
        </div>
      </div>

      <div class="containr right-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>The Long Break</h2>
          <small>H1 2022</small>
          <p>
            I finally decided to take a break from programming, which lasted
            around 5 months. But when I got to program again I realized
            something
          </p>
          <span class="right-container-arrow"></span>
        </div>
      </div>
      <div class="containr left-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>Restarting Again</h2>
          <small>H2 2022 - Early 2023</small>
          <p>
            All these years I relearnt all the technologies with significantly
            more detail, Which made my code much more cleaner and modular.
          </p>
          <span class="left-container-arrow"></span>
        </div>
      </div>

      <div class="containr right-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>Javascript</h2>
          <small>Feburary 2023 - Present</small>
          <p>
            At this time I started making applications using only Javascript on
            both frontend and backend.
          </p>
          <span class="right-container-arrow"></span>
        </div>
      </div>

      <div class="containr left-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>Svelte</h2>
          <small>May 2023 - Present</small>
          <p>
            This is when I discoverd Svelte and started building applications on it Since then it is my go to framework for Front end building and has powered my biggest apps, Even this portfolio is built with Svelte
          </p>
          <span class="left-container-arrow"></span>
        </div>
      </div>

      <div class="containr right-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>Minecraft Mods and Java</h2>
          <small>November 2023 - July 2024</small>
          <p>
            At this point I started to make mods for me and my friends to play with, This also gave me opportunity to learn Java.
          </p>
          <span class="right-container-arrow"></span>
        </div>
      </div>
      <div class="containr left-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>Golang</h2>
          <small>January 2024 - Present</small>
          <p>
            Now I wanted to make something high-performing, so I decided to use golangs. This is also the time where I started to make chess engines as chess was one of my biggest hobbies
          </p>
          <span class="left-container-arrow"></span>
        </div>
      </div>

      <div class="containr right-container">
        <img src="download.png" />
        <div class="text-box">
          <h2>Deep Dive into CPU design and computer science</h2>
          <small>July 2024 - Present</small>
          <p>
            Till this point I realized everything I have been doing is just the surface and that is when I discovered Mattbatwings. From there using the medium of Minecraft Redstone I learned computer science, which has helped me a ton even outside of programming.
          </p>
          <span class="right-container-arrow"></span>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .fancy {
    background: conic-gradient(
      from -45deg,
      rgba(0, 0, 0, 0) 0deg,
      rgba(0, 0, 0, 0) 150deg,
      rgba(0, 0, 255, 1) 180deg,
      #ae00ff 270deg,
      rgba(0, 0, 0, 0) 300deg
    );
  }
  .shadow-lights {
    background: linear-gradient(270deg, blue, #ae00ff);
  }
  .text-box{
    small,p,h2{
      position: relative;
      z-index: 15;
    }
  }
  .about {
    width: 100vw;
    height: auto;
    padding: 20px;
    h2 {
      font-size: 26px;
      font-family: "Playwrite ES Deco", cursive;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 23px;
      font-family: "Playwrite ES Deco";
      margin-bottom: 10px;
    }
    strong {
      font-family: "Courier New", Courier, monospace;
    }
  }
  .line {
    background-color: white;
    height: 100%;
    width: 3px;
  }
  * {
    box-sizing: border-box;
  }

  .timeline {
    position: relative;
    max-width: 100%;
    margin: 100px auto;
  }
  .containr {
    padding: 10px 50px;
    position: relative;
    width: 50%;
    animation: movedown 1s linear forwards;
    opacity: 0;
  }
  @keyframes movedown {
    0% {
      opacity: 1;
      transform: translate(-30px);
    }
    100% {
      opacity: 1;
      transform: translate(0px);
    }
  }
  .text-box {
    padding: 20px 30px;
    background: inherit;
    z-index: 15;
    position: relative;
    border-radius: 5px;
    font-size: 15px;
  }
  .left-container {
    left: 0;
  }
  .right-container {
    left: 50%;
  }
  .containr img {
    position: absolute;
    width: 20px;
    border-radius: 50%;
    right: -10px;
    top: 35px;
    z-index: 10;
  }
  .right-container img {
    left: -10px;
  }
  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background: #fff;
    top: 0px;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
    animation: moveline 6s linear forwards;
  }
  @keyframes moveline {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
  .text-box h2 {
    font-weight: 600;
  }
  .text-box small {
    display: inline-block;
    margin-bottom: 5px;
  }
  .left-container-arrow {
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    z-index: 1;
    border-top: 15px soild transparent;
    border-bottom: 15px soild transparent;
    border-left: 15px soild #fff;
    right: -15px;
  }
  .containr:nth-child(1) {
    animation-delay: 0s;
  }
  .containr:nth-child(2) {
    animation-delay: 1s;
  }
  .containr:nth-child(3) {
    animation-delay: 2s;
  }
  .containr:nth-child(4) {
    animation-delay: 2s;
  }
  .containr:nth-child(4) {
    animation-delay: 3s;
  }
  .containr:nth-child(5) {
    animation-delay: 4s;
  }
  .containr:nth-child(6) {
    animation-delay: 5s;
  }
  .containr:nth-child(7) {
    animation-delay: 6s;
  }
  .containr:nth-child(8) {
    animation-delay: 7s;
  }
  @media screen and (max-width: 900px) {
    .timeline {
      margin: 50px auto;
    }
    .timeline::after {
      left: 31px;
    }
    .containr {
      width: 100%;
      padding-left: 80px;
      padding-right: 25px;
    }
    .text-box {
      font-size: 13px;
    }
    .text-box small {
      font-size: 10px;
    }
    .right-container {
      left: 0;
    }
    .left-container img {
      left: 20px;
    }
    .right-container img {
      left: 20px;
    }
  }
</style>
