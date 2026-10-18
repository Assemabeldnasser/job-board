import ApplicationsProvider from "@/context/applications/ApplicationsProvider";
import ApplicationsFilter from "./ApplicationsFilter";
import ApplicationStatusSummary from "@/components/applications/ApplicationStatusSummary";
import ApplicationTable from "./ApplicationTable";
import { Job } from "@/types/Job";

type Probs = {
    jobs:Job[];
};

export default function ApplicationsListingWrapper({jobs}:Probs) {
    return (
        <ApplicationsProvider jobs={jobs}>
            <ApplicationsFilter />
            <ApplicationStatusSummary/>
            <ApplicationTable/>
        </ApplicationsProvider>
    );
}