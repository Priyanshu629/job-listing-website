"use client"
import { useContext, useState, useEffect } from "react"
import jobList from "../db/jobList.json"
import { createContext } from "react";

const jobsContext = createContext()

export const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState(jobList)
    const [searchJobTitle, setSearchJobTitle] = useState("")
    const [employmentType, setEmploymentType] = useState("")


    const filterJobs = (type) => {
        setEmploymentType(type);
    }



    useEffect(() => {
        const filteredList = jobList.filter(job => {
            const matchesTitle = job.title.toLowerCase().includes(searchJobTitle.toLowerCase());
            const matchesType = employmentType ? job.employmentType.toLowerCase().includes(employmentType.toLowerCase()) : true;
            return matchesTitle && matchesType;
        });
        setJobs(filteredList);
    }, [searchJobTitle, employmentType]);

    return (
        <jobsContext.Provider value={{ jobs, setSearchJobTitle, filterJobs }}>
            {children}
        </jobsContext.Provider>
    )
}

export const useJobs = () => useContext(jobsContext)
