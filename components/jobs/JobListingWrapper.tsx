"use client"
import FilterSidebar from "@/components/jobs/FilteredSidebar";
import JobCards from "@/components/jobs/JobCards";
import JobsProvider from "@/context/jobs/JobsProvider";

export default function JobListingWrapper() {

    return (
        <JobsProvider>
            <FilterSidebar/>
            <JobCards/>
        </JobsProvider>
    );

}