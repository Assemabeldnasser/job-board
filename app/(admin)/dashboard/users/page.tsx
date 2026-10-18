import AdminPageHeader from "@/components/common/AdminPageHeader";
import UsersListingWrapper from "@/components/users/UsersListingWrapper";
import { CandidatesData } from "@/data/CandidatesData";
import { getJobs } from "@/services/jobs/jobs.services";


export default async function Users() {
    const result = await getJobs();
    if (!result.success)
        return <div>Error on Loading</div>
    const { data: jobs = [] } = result;
    return (
        <>
            <AdminPageHeader
                title={"USERS"}
                subtitle={`${CandidatesData.length} ACTIVE LISTING`}
                btnLabel={"CREATE USER"}
                navigateLink={"/dashboard/users/new"}
                variant={"default"}
            />
            <UsersListingWrapper jobs={jobs}/>
        </>
    );
}