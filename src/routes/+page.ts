// Import necessary modules and types
import type { PageLoad } from "./$types";
import { conf } from "./../fbase_config.ts";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

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
  const projectSnapshot = await getDocs(collection(db, "projects"));
  const projects: ProjectData[] = [];

  // Iterate over each document in the collection
  for (const doc of projectSnapshot.docs) {
    const data = doc.data();

    // Get download URLs for images from Firebase Storage
    const ref1 = ref(storage, data.img);
    const ref2 = ref(storage, data.img2);
    const url1 = await getDownloadURL(ref1);
    const url2 = await getDownloadURL(ref2);

    // Push project data with resolved URLs into projects array
    projects.push({
      name: data.name,
      img: url1,
      img2: url2,
      about: data.about
    });
  }

  return projects;
};

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
