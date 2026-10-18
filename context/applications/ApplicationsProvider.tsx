"use client"
import { useState } from "react";
import { ApplicationsData } from "@/data/ApplicationsData";
import ApplicationsContext from "./AppliationsContext";
import getCandidate from "@/utils/GetCandidate";
import { CandidatesData } from "@/data/CandidatesData";
import { Job } from "@/types/Job";
import { Application } from "@/types/Application";

const ApplicationsProvider = ({jobs=[], children }: { jobs:Job[], children: React.ReactNode }) => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("ALL");
    const [jobFilter, setJobFilter] = useState<string>("ALL");
    const [jobstate] = useState<Job[]>(jobs);
    const [applications, setApplication] = useState<Application[]>(ApplicationsData);

    const filteredApplications = ApplicationsData.filter((app) => {
        const candidate = getCandidate(app.candidateId, CandidatesData);
        const searchTerm = search.toLowerCase();
        const matchesSearch = !search || (candidate !== undefined && (candidate.name.toLowerCase().includes(searchTerm) || candidate.email.toLowerCase().includes(searchTerm) || app.role.toLowerCase().includes(searchTerm)));
        const matchesStatus = statusFilter === "ALL" || app.status === statusFilter;
        const matchesJob = jobFilter === "ALL" || app.jobId === jobFilter;
        return matchesSearch && matchesStatus && matchesJob;
    });

    return (
        <ApplicationsContext.Provider value={{ search, setSearch, statusFilter, setStatusFilter, jobFilter, setJobFilter,filteredApplications, jobs:jobstate, applications, setApplication }}>
            {children}
        </ApplicationsContext.Provider>
    )
}
export default ApplicationsProvider;