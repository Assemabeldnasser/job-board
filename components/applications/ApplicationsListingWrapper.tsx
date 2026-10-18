import ApplicationsProvider from "@/context/applications/ApplicationsProvider";
import ApplicationsFilter from "./ApplicationsFilter";
import ApplicationStatusSummary from "@/components/applications/ApplicationStatusSummary";
import ApplicationTable from "./ApplicationTable";
import { Job } from "@/types/Job";
import { Application } from "@/types/Application";
import { Candidate } from "@/types/Candidate";

type Probs = {
    jobs:Job[];
    applications:Application[];
    candidates:Candidate[];
};

export default function ApplicationsListingWrapper({jobs, applications, candidates}:Probs) {
    return (
        <ApplicationsProvider jobs={jobs} applications={applications} candidates={candidates}>
            <ApplicationsFilter />
            <ApplicationStatusSummary/>
            <ApplicationTable/>
        </ApplicationsProvider>
    );
}