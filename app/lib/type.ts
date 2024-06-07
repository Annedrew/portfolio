import { links } from "./data";

// number is used as an index to access elements in the links array. 
export type SectionName = (typeof links)[number]["name"];
