"use server"

import { createjob } from "@/services/jobs/jobs.services";
import { CreateJobInput } from "@/services/jobs/jobs.validation";

export type CreateJobState = {
    errors?: Record<string, string[]>;
} | undefined;
export async function handleCreateJob(state: CreateJobState, formdata: FormData): Promise<CreateJobState> {

    const raw = Object.fromEntries(formdata);
    console.log("Raw= ", raw);
    const data = {
        ...raw as unknown as CreateJobInput,
        tags: (raw.tags as string).split(","),
        requirements: (raw.requirements as string).split("\n"),
        posted: new Date().toISOString(),
    }
    // console.log("Data = ",data);

    const result = await createjob(data);
    console.log("JobAction", result);
    if (!result.success)
        return {errors: result.errors};

}