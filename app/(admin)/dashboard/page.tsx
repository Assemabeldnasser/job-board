import { CandidatesData } from "@/data/CandidatesData";
import DashboardStatus from "@/components/dashboard/DashboardStatus";
import RecentApplication from "@/components/dashboard/RecentApplications";
import { getJobs } from "@/services/jobs/jobs.services";
import JobNotFound from "@/components/jobs/JobNotFound";

export default async function AdminDashboard() {

    const result = await getJobs();
    if(!result.success)
        return <JobNotFound/>
    const {data:jobs = []} = result;

    const averageScore = CandidatesData.length
        ? (
            CandidatesData.reduce((sum, c) => sum + c.aiScore, 0) /
            CandidatesData.length
        ).toFixed(1)
        : "0.0";

    const statusCounts = {
        SUBMITTED: CandidatesData.filter((c) => c.status === "SUBMITTED").length,
        REVIEW: CandidatesData.filter((c) => c.status === "REVIEW").length,
        SHORTLIST: CandidatesData.filter((c) => c.status === "SHORTLIST").length,
        INTERVIEW: CandidatesData.filter((c) => c.status === "INTERVIEW").length,
        REJECTED: CandidatesData.filter((c) => c.status === "REJECTED").length,
    };
    const activeJobs = jobs.length;
    const totalCandidates = CandidatesData.length;
    const interview = CandidatesData.filter((c) => c.status === "INTERVIEW").length;
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
            Candidates = {CandidatesData}/>
        </>
    );
}