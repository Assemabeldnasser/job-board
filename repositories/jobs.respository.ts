import JobApplyForm from "@/components/jobs/JobApplyForm";
import { JobsData } from "@/data/JobsData";
import { dbConnect } from "@/lib/db";
import { ApplicationModel } from "@/lib/models/application.model";
import { JobModel } from "@/lib/models/job.model";
import { CreateJobInput } from "@/services/jobs/jobs.validation";
import { Job } from "@/types/Job";
import { Types } from "mongoose";

type JobLean = Omit<Job, "id" | "posted"> & { _id: { toString(): string }; __v?: number; posted: Date };

function toJob(doc: JobLean): Job {
    const { _id, __v, posted, ...rest } = doc;
    return {
        ...rest, id: _id.toString(),
        posted: posted instanceof Date ? posted.toISOString().split("T")[0]
            : String(posted)
    };
}

export async function saveNewJob(job: CreateJobInput): Promise<Job> {
    await dbConnect();
    const newJob = await JobModel.create(job);
    return toJob(newJob);
}
export async function findAllJobs(): Promise<Job[]> {
    await dbConnect();

    const jobs = await JobModel.aggregate([
        {
            $lookup: {
                from: "applications",
                localField: "_id",
                foreignField: "jobId",
                as: "applications",
            },
        },
        {
            $addFields: {
                applicants: { $size: "$applications" },
            },
        },
        
        {
            $project: {
                applications: 0
            },
        },
    ]);
    return jobs.map(toJob);

    // const jobs = await JobModel.find({}).lean<JobLean[]>();
    // const jobsWithApplicants = await Promise.all(jobs.map(async(job)=>{
    //     const applicants = await ApplicationModel.countDocuments({
    //         jobId:job._id,
    //     });
    //     return {
    //         ...toJob(job),
    //         applicants:applicants,
    //     };
    // }));
    // return jobsWithApplicants;

}

export async function findJobById(id: string): Promise<Job | null> {
    await dbConnect();
    // const job = await JobModel.findById(id).lean<JobLean>();
    const job = await JobModel.aggregate([
        {
            $match: {
                _id: new Types.ObjectId(id),
            },
        },
        {
            $lookup: {
                from: "applications",
                localField: "_id",
                foreignField: "jobId",
                as: "applications",
            },
        },
        {
            $project: {
                applications: 0,
            },
        },
    ])
    return job.length > 0 ? toJob(job[0]) : null;
}

export async function seedTestJobs(): Promise<Job[]> {
    await dbConnect();
    const jobs = await JobModel.insertMany(JobsData);
    return jobs.map((job: JobLean) => toJob(job));
}