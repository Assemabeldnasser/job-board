import AdminPageHeader from "@/components/common/AdminPageHeader";
import UsersListingWrapper from "@/components/users/UsersListingWrapper";
import { CandidatesData } from "@/data/CandidatesData";

export default function Users() {
    return (
        <>
            <AdminPageHeader
                title={"USERS"}
                subtitle={`${CandidatesData.length} ACTIVE LISTING`}
                btnLabel={"CREATE USER"}
                navigateLink={"/dashboard/users/new"}
                variant={"default"}
            />
            <UsersListingWrapper />
        </>
    );
}