import AdminPageHeader from "@/components/common/AdminPageHeader";
import EditJobForm from "@/components/job-management/EditJobForm";
import JobNotFound from "@/components/jobs/JobNotFound";
import { JobsData } from "@/data/JobsData";
import { log } from "console";

type prob = {
    params : Promise<{jobId : string}>;
}
export default async function editJob ({params}:prob){
    const {jobId} = await params;
    // console.log(jobId);
    const Job = JobsData.find((job)=> job.id === jobId);
    if(!Job)
        return <JobNotFound/>
    return(
        <div className="w-full min-w-0">
            <AdminPageHeader
                title={"Edit JOB"}
                subtitle={`${Job.title}`}
                btnLabel={"<- Back"}
                navigateLink={"/dashboard/jobs"}
                variant={"default"}
            />
            <EditJobForm
            job = {Job}
            />
        </div>
    );
}