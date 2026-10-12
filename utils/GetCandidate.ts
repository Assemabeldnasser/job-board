import { Candidate } from "@/types/Candidate";

export default function getCandidate (id: string,candidate:Candidate[]):Candidate|undefined{
    return candidate.find((c) => c.id === id);
}