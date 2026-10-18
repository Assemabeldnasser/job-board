"use client"
import { createContext, useContext } from "react";
import { Application } from "@/types/Application";
import { Job } from "@/types/Job";
import { Candidate } from "@/types/Candidate";

type UsersContextType = {
    search: string;
    setSearch: (search: string) => void;
    expandedUser: string | null;
    setExpandedUser: (user: string | null) => void;
    candidates: Candidate[];
    jobs: Job[];
    applications: Application[];
    filteredCandidates: Candidate[];
    avgScore: number;
    totalApplications: number;
};

const UsersContext = createContext<UsersContextType>({
    search: "",
    setSearch: () => {},
    expandedUser: null,
    setExpandedUser: () => {},
    candidates: [],
    jobs: [],
    applications: [],
    filteredCandidates: [],
    avgScore: 0,
    totalApplications: 0,
});

export const useUsers= () => {
    return useContext(UsersContext)
}
export default UsersContext;