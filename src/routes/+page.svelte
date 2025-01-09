<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  // import { onMount } from "svelte";
  import type { PageData } from "./$types";
  // import { doc } from "firebase/firestore";
  import SkillsCard from "$lib/skillsCard.svelte";
  import { Root } from "postcss";
  export let data: PageData;
  console.log(data.projectSnap);
  let current: number = 0;
  let projectSnap = data.projectSnap;


</script>

<main class="relative z-20">
  <section class="ovr z-30">
    <Card.Root
      class="bg-[rgba(0,0,0,0.69)] max-h-[500px]  absolute w-[clamp(100px,60%,500px)] mb-10 "
    >
      <Card.Header
        class="gap-2 flex-row flex items-center font-['Poppins'] text-lg justify-evenly"
      >
        <img
          src="./logo.jpg"
          alt=""
          class="x w-[30%] aspect-square max-w-16 rounded-full"
        />
        <h2 class="font-['Poppins'] my-name flex justify-center items-center">
          The 12 Year old programmer
        </h2>
      </Card.Header>
      <Card.Content class="overflow-hidden">
        <p class="me text-balance font-sans max-h-[300px] overflow-hidden">
          Hey There 👋, I am Utkarsh Chandel. Also known as the 11 year old
          programmer. I am from India. Born in 18 March 2012, My current age is {data.age}.
          I have been programming since 2020 and now I've been programming for {data.codingFor}
          years. Now I know total of 6 programming languages which being: Javascript,
          Python, PHP, Go, Java and C
        </p>
      </Card.Content>
      <Card.Footer class="flex flex-col items-start gap-2 font-['Poppins']">
        <h3>Socials:</h3>

        <div class="wrapper flex w-full justify-between">
          <a href="https://www.youtube.com/@TheUtkarsh8939" target="_blank">
            <img src="./yt.svg" alt="Youtube Logo" class="size-12" />
          </a>
          <a
            href="https://github.com/TheUtkarsh8939"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./github.svg"
              alt="Github Logo"
              class="size-12"
              style="filter:invert(100%)"
            />
          </a>
        </div>
      </Card.Footer>
    </Card.Root>
    
  </section>
</main>
<div id="main">
  <section class="projects -z-10 bg-black flex flex-col items-center">

    <div class="projectArea flex h-[80vh] w-screen">
      <div class="mobile-container">
        <div class="mobile-border z-10 mob1">
          <div class="mobile1 mobile">
            <div class="notch-border absolute">
              <div class="notch bg-black h-full w-full"></div>
            </div>
            <img
              src={projectSnap[current].img}
              alt={projectSnap[current].name + " Image 1"}
            />
          </div>
        </div>
        <div
          class="mob2 mobile-border z-0 translate-x-[-20px] translate-y-[20px]"
        >
          <div class="mobile2 mobile">
            <img
              src={projectSnap[current].img2}
              alt={projectSnap[current].name + " Image 2"}
            />
          </div>
        </div>
      </div>
      <div class="abt">
        <h3>{projectSnap[current].name}</h3>
        <p>
          {projectSnap[current].about}
        </p>
      </div>
    </div>
    <div class="dot-array flex gap-1">
      {#each projectSnap as _, i}
        {#if current == i}
          <div class="dot bg-gray-200 size-1 rounded-full"></div>
        {:else}
          <div class="dot bg-gray-500 size-1 rounded-full"></div>
        {/if}
      {/each}
    </div>
  </section>
  <section class="languagesKnown">
     <div class="statusInfo">
      <div class="colors">
        <div class="color" style="background-image:linear-gradient(130deg,blue,#ff00c8);"></div>
        <span class="status" >Learnt</span>
      </div>
      <div class="colors">
        <div class="color"style="background-image: linear-gradient(90deg,orange,yellow)"></div>
        <span class="status">Learning</span>
      </div>
      <div class="colors">
        <div class="color" style="background-image: linear-gradient(90deg,red,#fc623f)"></div>
        <span class="status">On the roadmap</span>
      </div>
     </div>
     <div class="lang mt-10 grid">
     <SkillsCard name="Svelte" status=2 logoUrl="/svelte.svg"></SkillsCard>
     <SkillsCard name="TypeScript" status=2 logoUrl="/ts.svg"></SkillsCard>
     <SkillsCard name="Javascript" status=2 logoUrl="/js.png"></SkillsCard>
     <SkillsCard name="Golang" status=2 logoUrl="/go.png"></SkillsCard>
     <SkillsCard name="Python" status=2 logoUrl="/python.png"></SkillsCard>
     <SkillsCard name="Java" status=2 logoUrl="/java.svg"></SkillsCard>
     <SkillsCard name="C" status=1 logoUrl="/c.png"></SkillsCard>
     <SkillsCard name="Rust" status=0 logoUrl="/rust.png"></SkillsCard>
      <div class="flex w-screen  justify-center">
        <div class="border-git p-[1px]">
          <Card.Root class="rounded-2xl">
            <Card.Header class="w-[clamp(0px,70vw,500px)] flex text-center">
              <h1 class="text-2xl">Get in touch</h1>
            </Card.Header>
            <Card.Content class="w-[clamp(0px,70vw,500px)] flex justify-center">
              <div class="flex flex-col items-center justify-start">
                <div class="border-git-link relative z-10">
                  <a href="/contact" class="getintouch">Contact me</a>
  
                </div>              
                <div class="shadow absolute h-14 mt-2 w-20"></div>
              </div>
            </Card.Content>
           </Card.Root>
        </div>
    </div>

     </div>
  </section>
</div>

<style lang="scss">
  @mixin gradient {
    background-image: linear-gradient(90deg, blue, magenta);
  }
  .shadow{
    @include gradient();
    filter:blur(20px);
  }
  @media only screen and (max-width:549px){
    .projectArea{
      flex-direction:column;
      align-items: center;
      justify-content: center;
      padding-top:50px;
    }
    .abt{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .name{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
  .my-name {
    font-size: clamp(0px, 4vw, 20px);
  }
  .border-git{
    background:linear-gradient(45deg,blue,rgb(195, 0, 255));
    border-radius: 15px;
    margin-top: 10px;
    
  }
  main {
    --height: calc(100vh - 101px);
    background-image: url("/bg.jpg");
    height: var(--height);
    width: 100vw;
    background-size: cover;
  }
  .getintouch{
    height: 50px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 20px;
    
  }
  .mobile {
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    background-color: black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }
  .border-git-link{
    padding: 1px;
    background:linear-gradient(135deg,blue,rgb(195, 0, 255));
    border-radius: 20px;
  }
  .ovr {
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0)
    );
    height: var(--height);
    width: 100vw;
    align-items: center;
  }


  .mobile-border {
    max-height: 70vh;
    max-width: calc(calc(70vh / 16) * 9);
    width: 30vw;
    aspect-ratio: 9/16;
    position: absolute;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s all ease-in-out;
    //@include gradient();
    background-color: black;
    box-shadow:
      0px 0px 25px rgb(0, 0, 255),
      0px 0px 16px rgb(255, 0, 200);
  }
  .mobile-container {
    &:hover {
      .mob1 {
        transform: translate(25px, -25px);
      }
      .mob2 {
        transform: translate(-45px, 45px);
      }
    }
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
  .projects {
    height: 100vh;
    width: 100vw;
    display: flex;
    
  }
  .notch-border {
    height: 5%;
    width: 50%;
    padding: 0px 1px 0px 1px;
    @include gradient();
    border-radius: 0px 0px 5px 5px;
    display: flex;
    justify-content: center;
  }
  .notch {
    height: calc(100% - 1px);
    width: 100%;
    background-color: black;
    border-radius: 0px 0px 5px 5px;
  }
  .me {
    font-size: clamp(0px, 3vw, 15px);
  }
  .abt {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 5px;
    h3 {
      font-family: "Poppins", sans-serif;
      font-size: 25px;
    }
    p {
      flex-wrap: wrap;
      font-family: sans-serif;
    }
  }
  .mobile {
    overflow: hidden;
    aspect-ratio: 9/20;
    img {
      width: 100%;
    }
  }
  .languagesKnown{
    background-color: black;
    .statusInfo{
      display:flex;
      gap:6px;
      width: 100vw;
      justify-content: center;
      .colors{
        display: flex;
        align-items: center;
        gap:2px;
        .color{
          height: 10px;
          width: 10px;
        }
      }
    }
  }
  .lang{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 10px;
  }
</style>
