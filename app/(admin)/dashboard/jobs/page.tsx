import AdminPageHeader from "@/components/common/AdminPageHeader";
import JobManagementTable from "@/components/job-management/JobManagementTable";
import { JobsData } from "@/data/JobsData";
export default function JobManagement() {
    return (
        <>
            <AdminPageHeader
                title={"JOB POSTS"}
                subtitle={`${JobsData.length} ACTIVE LISTING`}
                btnLabel={"+ CREATE JOB"}
                navigateLink={"/dashboard/jobs/new"}
                variant={"destructive"}
            />
            <JobManagementTable Jobs={JobsData} />

        </>
    );
}