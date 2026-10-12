import { Application } from "@/types/Application";

export function getCandidateApplications(candidateId: string, applications: Application[]): Application[] {
  return applications.filter((a) => a.candidateId === candidateId);
}