import AdminPageHeader from "@/components/common/AdminPageHeader";
import CreateJobForm from "@/components/job-management/CreateJobForm";

export default function NewJob() {
    return (
        <div className="w-full min-w-0">
            <AdminPageHeader
                title={"CREATE JOB"}
                subtitle={"NEW LISTING"}
                btnLabel={"<- Back"}
                navigateLink={"/dashboard/jobs"}
                variant={"default"}
            />
            <CreateJobForm/>
        </div>

    );
}