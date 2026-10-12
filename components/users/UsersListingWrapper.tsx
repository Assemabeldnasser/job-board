import UsersProvider from "@/context/users/UsersProvider";
import UsersStatus from "./UsersStatus";
import UsersSearch from "./UsersSearch";
import UsersList from "./UsersList";

export default function UsersListingWrapper() {
    return (
        <UsersProvider>
            <UsersStatus/>
            <UsersSearch/>
            <UsersList/>
        </UsersProvider>
    );
}