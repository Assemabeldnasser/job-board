import ClientPageHeader from "@/components/common/ClientPageHeader";
import JobListingWrapper from "@/components/jobs/JobListingWrapper";
import JobNotFound from "@/components/jobs/JobNotFound";
import { getJobs } from "@/services/jobs/jobs.services";

export default async function job() {

    const result = await getJobs();
    if (!result.success)
        return <JobNotFound />

    const { data: jobs = [] } = result;

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <ClientPageHeader
                title="All Positions"
                subtitle={`${jobs.length} Open Roles`}
            />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                <JobListingWrapper jobs={jobs}/>
            </div>
        </div>
    );
}