import AdminPageHeader from "@/components/common/AdminPageHeader";
import UsersListingWrapper from "@/components/users/UsersListingWrapper";
import { getApplications } from "@/services/applications/applications.services";
import { getCandidates } from "@/services/candidates/candidates.service";
import { getJobs } from "@/services/jobs/jobs.services";


export default async function Users() {
    const JobsResult = await getJobs();
    const ApplicationsResult = await getApplications();
    const CandidatesResult = await getCandidates();


    if (!JobsResult.success)
        return <div>Error on Loading Jobs</div>
        if (!ApplicationsResult.success)
        return <div>Error on Loading Applications</div>
        if (!CandidatesResult.success)
        return <div>Error on Loading Candidates</div>
    const { data: jobs = [] } = JobsResult;
    const { data: applications = [] } = ApplicationsResult;
    const { data: candidates = [] } = CandidatesResult;

    return (
        <>
            <AdminPageHeader
                title={"USERS"}
                subtitle={`${candidates.length} ACTIVE LISTING`}
                btnLabel={"CREATE USER"}
                navigateLink={"/dashboard/users/new"}
                variant={"default"}
            />
            <UsersListingWrapper jobs={jobs} applications={applications} candidates={candidates}/>
        </>
    );
}