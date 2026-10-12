import AdminPageHeader from "@/components/common/AdminPageHeader";
import { ApplicationsData } from "@/data/ApplicationsData";
import ApplicationsListingWrapper from "@/components/applications/ApplicationsListingWrapper";

export default async function ApplicationManagement() {
    return (
        <>
                    <AdminPageHeader
                        title={"APPLICATIONS"}
                        subtitle={`${ApplicationsData.length} ACTIVE LISTING`}
                        btnLabel={"VIEW ALL USERS ->"}
                        navigateLink={"/dashboard/users"}
                        variant={"default"}
                    />

                    <ApplicationsListingWrapper/>
        </>
    );
}