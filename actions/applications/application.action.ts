"use server"

import { applayToJob } from "@/services/applications/applications.services";
import { ApplyToJobInput } from "@/services/applications/applications.validation";


export type CreateApplicationState = {
    errors: Record<string, string[]>;
} | undefined;

export async function handleCreateApplication(state: CreateApplicationState, formdata: FormData): Promise<CreateApplicationState> {
    const raw = Object.fromEntries(formdata);
    const data = {
        ...raw as ApplyToJobInput,
        // appliedDate: new Date().toISOString(),
    }
    const result = await applayToJob(data);
    if (!result.success)
        return {errors: result.errors ?? {},};
    

}