import UsersProvider from "@/context/users/UsersProvider";
import UsersStatus from "./UsersStatus";
import UsersSearch from "./UsersSearch";
import UsersList from "./UsersList";
import { Job } from "@/types/Job";
import { Application } from "@/types/Application";
import { Candidate } from "@/types/Candidate";

type Probs ={
    jobs:Job[];
    applications:Application[];
    candidates:Candidate[];
};

export default function UsersListingWrapper({jobs,applications,candidates}:Probs) {
    return (
        <UsersProvider jobs={jobs} applications={applications} candidates={candidates}>
            <UsersStatus/>
            <UsersSearch/>
            <UsersList/>
        </UsersProvider>
    );
}