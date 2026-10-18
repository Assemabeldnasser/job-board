"use client"
import FilterSidebar from "@/components/jobs/FilteredSidebar";
import JobCards from "@/components/jobs/JobCards";
import JobsProvider from "@/context/jobs/JobsProvider";
import { Job } from "@/types/Job";

type Props = {
jobs:Job[];
};

export default function JobListingWrapper({jobs}:Props) {

    return (
        <JobsProvider jobs={jobs}>
            <FilterSidebar/>
            <JobCards/>
        </JobsProvider>
    );

}