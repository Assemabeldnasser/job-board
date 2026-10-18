import UsersProvider from "@/context/users/UsersProvider";
import UsersStatus from "./UsersStatus";
import UsersSearch from "./UsersSearch";
import UsersList from "./UsersList";
import { Job } from "@/types/Job";

type Probs ={
    jobs:Job[];
};

export default function UsersListingWrapper({jobs}:Probs) {
    return (
        <UsersProvider jobs={jobs}>
            <UsersStatus/>
            <UsersSearch/>
            <UsersList/>
        </UsersProvider>
    );
}