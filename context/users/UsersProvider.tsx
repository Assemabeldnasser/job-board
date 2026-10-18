"use client"
import { useState } from "react";
import { Job } from "@/types/Job";
import { Application } from "@/types/Application";
import UsersContext from "../users/UsersContext";
import { Candidate } from "@/types/Candidate";

type Probs = {
jobs:Job[],
applications:Application[], 
candidates:Candidate[],
children: React.ReactNode
};
const UsersProvider = ({ jobs=[],applications=[],candidates=[], children }:Probs) => {

    const [search, setSearch] = useState("");
    const [expandedUser, setExpandedUser] = useState<string | null>(null);
    const [candidatesState] = useState<Candidate[]>(candidates);
    const [jobState] = useState<Job[]>(jobs);
    const [applicationsState] = useState<Application[]>(applications);
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
        <UsersContext.Provider value={{ search, setSearch, expandedUser, setExpandedUser, candidates:candidatesState, jobs:jobState, applications:applicationsState, filteredCandidates, avgScore, totalApplications }}>
            {children}
        </UsersContext.Provider>
    )
}
export default UsersProvider;