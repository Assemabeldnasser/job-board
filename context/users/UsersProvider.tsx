"use client"
import { useState } from "react";
import { Job } from "@/types/Job";
import { Application } from "@/types/Application";
import UsersContext from "../users/UsersContext";
import { Candidate } from "@/types/Candidate";
import { JobsData } from "@/data/JobsData";
import { CandidatesData } from "@/data/CandidatesData";
import { ApplicationsData } from "@/data/ApplicationsData";

const UsersProvider = ({ children }: { children: React.ReactNode }) => {

    const [search, setSearch] = useState("");
    const [expandedUser, setExpandedUser] = useState<string | null>(null);
    const [candidates,setCandidates] = useState<Candidate[]>(CandidatesData);
    const [jobs,setJobs] = useState<Job[]>(JobsData);
    const [applications,setApplications] = useState<Application[]>(ApplicationsData);
    const filteredCandidates = candidates.filter(
        (u) =>
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase()),
    );
    const totalApplications = applications.length;
    const avgScore =
        applications.length > 0
            ? Math.round(
                (applications.reduce((s, a) => s + a.aiScore, 0) /
                    applications.length) *
                10,
            ) / 10
            : 0;

    return (
        <UsersContext.Provider value={{ search, setSearch, expandedUser, setExpandedUser, candidates, setCandidates, jobs, setJobs, applications, setApplications, filteredCandidates, avgScore, totalApplications }}>
            {children}
        </UsersContext.Provider>
    )
}
export default UsersProvider;