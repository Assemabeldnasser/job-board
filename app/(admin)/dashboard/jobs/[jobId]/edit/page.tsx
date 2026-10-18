import AdminPageHeader from "@/components/common/AdminPageHeader";
import EditJobForm from "@/components/job-management/EditJobForm";
import JobNotFound from "@/components/jobs/JobNotFound";
import { getJob } from "@/services/jobs/jobs.services";

type prob = {
    params : Promise<{jobId : string}>;
}
export default async function editJob ({params}:prob){
    const {jobId} = await params;
    // console.log(jobId);
    const result = await getJob (jobId);
    if(!result.success)
        return <JobNotFound/>
    const {data:job} = result;
    if (!job)
        return <JobNotFound/>
    return(
        <div className="w-full min-w-0">
            <AdminPageHeader
                title={"Edit JOB"}
                subtitle={`${job.title}`}
                btnLabel={"<- Back"}
                navigateLink={"/dashboard/jobs"}
                variant={"default"}
            />
            <EditJobForm
            job = {job}
            />
        </div>
    );
}