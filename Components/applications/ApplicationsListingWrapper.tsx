import ApplicationsProvider from "@/context/applications/ApplicationsProvider";
import ApplicationsFilter from "./ApplicationsFilter";
import ApplicationStatusSummary from "@/components/applications/ApplicationStatusSummary";
import ApplicationTable from "./ApplicationTable";

export default function ApplicationsListingWrapper() {
    return (
        <ApplicationsProvider>
            <ApplicationsFilter />
            <ApplicationStatusSummary/>
            <ApplicationTable/>
        </ApplicationsProvider>
    );
}