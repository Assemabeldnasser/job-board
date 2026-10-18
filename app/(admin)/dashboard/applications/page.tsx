import AdminPageHeader from "@/components/common/AdminPageHeader";
import ApplicationsListingWrapper from "@/components/applications/ApplicationsListingWrapper";
import { getJobs } from "@/services/jobs/jobs.services";
import { getApplications } from "@/services/applications/applications.services";
import { getCandidates } from "@/services/candidates/candidates.service";

export default async function ApplicationManagement() {
    const JobsResult = await getJobs();
    const ApplicationssResult = await getApplications();
    const CandidatesResult = await getCandidates();


    if (!JobsResult.success)
        return <div>Error Loading Jobs</div>
    if (!ApplicationssResult.success)
        return <div>Error Loading Applications</div>
         if (!CandidatesResult.success)
        return <div>Error Loading Candidates</div>
    const {data:jobs=[]}=JobsResult;
    const {data:candidates=[]}=CandidatesResult;
    const {data:applications=[]}=ApplicationssResult;

    return (
        <>
                    <AdminPageHeader
                        title={"APPLICATIONS"}
                        subtitle={`${applications.length} ACTIVE LISTING`}
                        btnLabel={"VIEW ALL USERS ->"}
                        navigateLink={"/dashboard/users"}
                        variant={"default"}
                    />

                    <ApplicationsListingWrapper jobs={jobs} applications={applications} candidates={candidates}/>
        </>
    );
}