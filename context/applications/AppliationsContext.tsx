"use client"
import { createContext, useContext } from "react";
import { Application } from "@/types/Application";
import { Job } from "@/types/Job";

type ApplicationsContextType = {
    search: string;
    setSearch: (search: string) => void;
    statusFilter: string;
    setStatusFilter: (statusFilter: string) => void;
    jobFilter: string;
    setJobFilter: (jobFilter: string) => void;
    filteredApplications: Application[];
    jobs: Job[];
    setJobs: (jobs: Job[]) => void;
    applications: Application[];
    setApplication: (applications: Application[]) => void;
};

const ApplicationsContext = createContext<ApplicationsContextType>({
    search: "",
    setSearch: () => { },
    statusFilter: "ALL",
    setStatusFilter: () => { },
    jobFilter: "ALL",
    setJobFilter: () => { },
    filteredApplications: [],
    jobs: [],
    setJobs: () => { },
    applications: [],
    setApplication: () => { },
});

export const useApplications = () => {
    return useContext(ApplicationsContext)
}
export default ApplicationsContext;