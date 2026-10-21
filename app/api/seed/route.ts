import { seedApplications } from "@/services/applications/applications.services";
import { seedJobs } from "@/services/jobs/jobs.services";
import { NextResponse } from "next/server";

export async function GET(request:Request){
    const jobResult = await seedJobs();
    const applicationResult = await seedApplications();
    return NextResponse.json({jobs:jobResult, applications:applicationResult});
}