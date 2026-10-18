import AdminPageHeader from "@/components/common/AdminPageHeader";
import { ApplicationsData } from "@/data/ApplicationsData";
import ApplicationsListingWrapper from "@/components/applications/ApplicationsListingWrapper";
import { getJobs } from "@/services/jobs/jobs.services";

export default async function ApplicationManagement() {
    const result = await getJobs();
    if (!result.success)
        return <div>Error Loading Jobs</div>
    const {data:jobs=[]}=result;
    return (
        <>
                    <AdminPageHeader
                        title={"APPLICATIONS"}
                        subtitle={`${ApplicationsData.length} ACTIVE LISTING`}
                        btnLabel={"VIEW ALL USERS ->"}
                        navigateLink={"/dashboard/users"}
                        variant={"default"}
                    />

                    <ApplicationsListingWrapper jobs={jobs}/>
        </>
    );
}