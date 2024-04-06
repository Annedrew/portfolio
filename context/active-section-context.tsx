"use client"
import { links } from '@/lib/data';
import React, { useContext, useState, createContext } from 'react';

// number is used as an index to access elements in the links array. 
type SectionName = typeof links[number]["name"]; 

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  // Keep track of this to disable the observer temprarily when user clicks on a link, so that headers in between don't stop by.
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  }}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}