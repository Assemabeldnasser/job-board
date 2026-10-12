import ClientPageHeader from "@/components/common/ClientPageHeader";
import JobListingWrapper from "@/components/jobs/JobListingWrapper";
import { JobsData } from "@/data/JobsData";
export default function job() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <ClientPageHeader
                title="All Positions"
                subtitle={`${JobsData.length} Open Roles`}
            />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                <JobListingWrapper />
            </div>
        </div>
    );
}