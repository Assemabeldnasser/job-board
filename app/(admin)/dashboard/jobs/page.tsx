import AdminPageHeader from "@/components/common/AdminPageHeader";
import JobManagementTable from "@/components/job-management/JobManagementTable";
import { getJobs } from "@/services/jobs/jobs.services";
import JobNotFound from "@/components/jobs/JobNotFound";

export default async function JobManagement() {
    const result = await getJobs();
    
    if (!result.success)
        // return (
        //     <div>
        //         Error Loading Jobs
        //         {Object.entries(result.errors ?? {}).map(([key, messages]) => (
        //             <div key={key}>
        //                 <strong>{key}:</strong>
        //                 {messages.map((message, index) => (
        //                     <p key={index}>{message}</p>
        //                 ))}
        //             </div>
        //         ))}
        //     </div>
        // );
      return <JobNotFound/>
        
    const { data = [] } = result;

    return (
        <>
            <AdminPageHeader
                title={"JOB POSTS"}
                subtitle={`${data.length} ACTIVE LISTING`}
                btnLabel={"+ CREATE JOB"}
                navigateLink={"/dashboard/jobs/new"}
                variant={"destructive"}
            />
            <JobManagementTable Jobs={data} />

        </>
    );
}