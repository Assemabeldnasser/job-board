import DashboardStatus from "@/components/dashboard/DashboardStatus";
import RecentApplication from "@/components/dashboard/RecentApplications";
import { getJobs } from "@/services/jobs/jobs.services";
import JobNotFound from "@/components/jobs/JobNotFound";
import { getCandidates } from "@/services/candidates/candidates.service";

export default async function AdminDashboard() {

    const JobsResult = await getJobs();
    const CandidatesResult = await getCandidates();

    if(!JobsResult.success)
        return <JobNotFound/>
        if(!CandidatesResult.success)
        return <JobNotFound/>
    const {data:candidates = []} = CandidatesResult;
    const {data:jobs = []} = JobsResult;

    const averageScore = candidates.length
        ? (
            candidates.reduce((sum, c) => sum + c.aiScore, 0) /
            candidates.length
        ).toFixed(1)
        : "0.0";

    const statusCounts = {
        SUBMITTED: candidates.filter((c) => c.status === "SUBMITTED").length,
        REVIEW: candidates.filter((c) => c.status === "REVIEW").length,
        SHORTLIST: candidates.filter((c) => c.status === "SHORTLIST").length,
        INTERVIEW: candidates.filter((c) => c.status === "INTERVIEW").length,
        REJECTED: candidates.filter((c) => c.status === "REJECTED").length,
    };
    const activeJobs = jobs.length;
    const totalCandidates = candidates.length;
    const interview = candidates.filter((c) => c.status === "INTERVIEW").length;
    return (
        <>
            <h1 className="font-mono text-4xl md:text-4xl font-bold"> OVERVIEW </h1>
            <p className="font-mono text-sm text-muted-foreground"> ADMIN DASHBOARD </p>
            <DashboardStatus
                activeJobs={activeJobs}
                totalCandidates={totalCandidates}
                avgScore={averageScore}
                interviews={interview}
            />
            <RecentApplication 
            Candidates = {candidates}/>
        </>
    );
}