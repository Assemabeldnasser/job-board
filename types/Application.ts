
export interface Application {
  id: string;
  candidateId: string; //Validated
  candidateName: string; //Validated
  candidateEmail: string; //Validated
  candidateLinkedin: string; //Validated
  // candidateResume: string;
  candidateCoverLetter: string; //Validated
  jobId: string; //Validated
  jobTitle: string;
  jobCompany:string;
  role: string;
  aiScore: number;
  status:
    | "SUBMITTED"
    | "REVIEW"
    | "SHORTLIST"
    | "INTERVIEW"
    | "REJECTED";
  appliedDate: string;
  coverLetter?: string; //Validated
}
