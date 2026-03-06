// Import necessary modules and types
import type { PageLoad } from "./$types";
import { conf } from "./../fbase_config.ts";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
export const prerender = true;
// Define ProjectData interface
interface ProjectData {
  name: string;
  img: string;
  img2: string;
  about: string;
}

// Initialize Firebase app, Firestore, and Storage
const app = initializeApp(conf);
const db = getFirestore(app);
const storage = getStorage(app);

// Fetch projects collection from Firestore
const loadProjects = async () => {
  let projects: ProjectData[] = [];
  projects=[
    {
      name: "Class Website",
      img: "./projectimg/class1.png",
      img2: "./projectimg/class2.png",
      about: "I made this website just for my class, like to promote and make it one of unique ones. you can have a look: class8bsaltlake.vercel.app"
    },
  {
  name: "Pihu",
  img: "./projectimg/a.png",
  img2: "./projectimg/b.png",
  about: `I mostly focus on practical projects. So this project was made in focus for my school's Science Exhibition in mind, this is kind of like a chat application but there is also a AI named Pihu reading your messages and will respond when you use  "Pihu" At start of uour sentance, It can also be easily modified to do other things than Science Exhibition help.`
  },
  {
    name: "Barracuda",
    img: "./projectimg/chess.png",
    img2: "./projectimg/chess.png",
    about: "This is a chess engine I made in Golang, not the best but I tried to optimize it as much as I could, It achieved 2200 elo at just depth 4 tho."
  
  },
  {
    name: "Cube Alg Ranker",
    img: "./projectimg/cube.png",
    img2: "./projectimg/cube.png",
    about: "Basically, This app takes a set of moves and simulates then in the cube to count some metrics. It then feeds those mterics to JPerm's algorithm and gives the score out"
  },
  {
    name: "Sparsh",
    img: "./projectimg/sparsh1.png",
    img2: "./projectimg/sparsh2.png",
    about: "Made this project for rsbvp, The main motive for it was to help teacher and student connect with each having an AI agent, the ai agent of teacher and the ai agent of the student can talk to each other, the ai agents allow for better empathy and understanding between the teacher and the student, this project is still in early stages but it has a lot of potential and I am really excited to work on it"
  },
  {
    name: "SparkVM",
    img: "./projectimg/spark.png",
    img2: "./projectimg/spark.png",
    about: "Discovered this buried in my archives, I made it in June 2024 and it is a basic assembly language and a virtual machine to run it, It is pretty basic but it was a fun project to work on and I learned a lot from it, it has call stacks and heaps and all."
    
  },
  {
    name: "Sparshak",
    img: "./projectimg/sparshak.png",
    img2: "./projectimg/sparshak2.png",
    about: "Published in May of 2023, This app was one of my first major project. I targeted this towards my friends as they used many devices and whatsapp was a huge hassel to login in every one of them. This currently has 4000 MAU(Monthly Active Users)"
  
  },
{
  name: "Current Project",
  img: "./projectimg/studsim1.png",
  img2: "./projectimg/studsim2.png",
  about: "This is my current project, and by far the most advanced and well documented one, It is a school simulator, depicting the life of 30 students following 16 teachers, I tried to make it as realistic as possible, each student has 30 different parameters to define his personality and 10 to define his current states. It simulates little details like ego and insecurity too, I wonder how it evolves"

}
]


  return projects;
}

// Define the PageLoad function
export const load: PageLoad = async () => {
  try {
    // Load projects data asynchronously
    const projectData = await loadProjects();

    // Prepare additional data if needed
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const additionalData = {
      age: year - 2012,
      codingFor: year - 2020,
      projectSnap: projectData,
    };

    // Return the combined data
    return additionalData;
  } catch (error) {
    console.error("Error loading data:", error);
    throw error; // Propagate the error to handle it elsewhere if needed
  }
};
