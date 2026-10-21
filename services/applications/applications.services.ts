import { findAllApplications, findApplicationById, saveNewApplication, seedTestApplications } from "@/repositories/applications.repository";
import { Application } from "@/types/Application";
import { ServiceResult } from "@/types/ServiceResult";
import { applicationSchema, ApplyToJobInput } from "./applications.validation";
import { z } from "zod";
import { findJobById } from "@/repositories/jobs.respository";

export async function getApplications(): Promise<ServiceResult<Application[]>> {
   const applications = await findAllApplications();
   if (!applications)
      return { success: false, errors: { id: ["Application not Found"] } };
   return { success: true, data: applications }
}

export async function applayToJob(input: ApplyToJobInput): Promise<ServiceResult<Application>> {
   const validated = applicationSchema.safeParse(input);
   if (!validated.success)
      return { success: false, errors: z.flattenError(validated.error).fieldErrors };

   const job = await findJobById(validated.data.jobId)
   if (!job)
      return { success: false, errors: { jobid: ["Jobs not found"] } };

   // TODO : Check if Job is Active

   const newapplication = await saveNewApplication({
      ...validated.data,
      candidateId: "6ad79b1653ac629f44bf1efe", // TODO : Replace with actual candidate
      jobTitle: job.title,
      jobCompany:job.company,
      role: job.title,
      aiScore: 0,
      status: "SUBMITTED",
   });
   return { success: true, data: newapplication };
}

export async function getApplicationById(id: string): Promise<ServiceResult<Application>> {
   const application = await findApplicationById(id);
   if (!application)
      return { success: false, errors: { id: ["Application not Found"] } };
   return { success: true, data: application };
}

export async function seedApplications(): Promise<ServiceResult<Application[]>> {
   const applications = await seedTestApplications();
   return { success: true, data: applications };
}