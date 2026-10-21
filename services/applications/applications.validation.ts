import {z} from "zod";

export const applicationSchema = z.object({
    // candidateId:z.string().min(1,"Candidate ID is Required"),
    jobId:z.string().min(1,"Job ID is Required"),
    candidateName:z.string().min(1,"Name is Required"),
    candidateEmail:z.email().min(1,"Email is Required"),
    candidateLinkedin:z.string().min(1,"LikedIn Link is Required"),
    candidateCoverLetter:z.string().min(1,"Cover Letter is Required"),
})

export type ApplyToJobInput = z.infer<typeof applicationSchema>;