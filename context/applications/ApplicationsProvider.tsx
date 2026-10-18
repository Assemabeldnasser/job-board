"use client"
import { useState } from "react";
import ApplicationsContext from "./AppliationsContext";
import getCandidate from "@/utils/GetCandidate";
import { Job } from "@/types/Job";
import { Application } from "@/types/Application";
import { Candidate } from "@/types/Candidate";

type Props = {
    jobs:Job[], 
    applications:Application[], 
    candidates:Candidate[],
    children: React.ReactNode,
};
const ApplicationsProvider = ({jobs=[],applications=[],candidates=[], children }: Props) => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("ALL");
    const [jobFilter, setJobFilter] = useState<string>("ALL");
    const [jobstate] = useState<Job[]>(jobs);
    const [applicationsState] = useState<Application[]>(applications);
    const [candidatesState] = useState<Candidate[]>(candidates);


    const filteredApplications = applicationsState.filter((app) => {
        const candidate = getCandidate(app.candidateId, candidatesState);
        const searchTerm = search.toLowerCase();
        const matchesSearch = !search || (candidate !== undefined && (candidate.name.toLowerCase().includes(searchTerm) || candidate.email.toLowerCase().includes(searchTerm) || app.role.toLowerCase().includes(searchTerm)));
        const matchesStatus = statusFilter === "ALL" || app.status === statusFilter;
        const matchesJob = jobFilter === "ALL" || app.jobId === jobFilter;
        return matchesSearch && matchesStatus && matchesJob;
    });

    return (
        <ApplicationsContext.Provider value={{ search, setSearch, statusFilter, setStatusFilter, jobFilter, setJobFilter,filteredApplications, jobs:jobstate, applications:applicationsState,candidates:candidatesState }}>
            {children}
        </ApplicationsContext.Provider>
    )
}
export default ApplicationsProvider;