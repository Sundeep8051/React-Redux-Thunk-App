import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser } from "../store/index.js";
import Skeleton from "./Skeleton.jsx";
import Button from "./Button.jsx";
import useThunk from "../hooks/use-thunk.js";
import UsersListItem from "./UsersListItem.jsx";

const UsersList = () => {
  const [fetchUsersThunk, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [addUserThunk, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    fetchUsersThunk();
  }, [fetchUsersThunk]);

  const handleUserAdd = () => {
    addUserThunk();
  };

  const renderedUsers = data.map((user) => {
    return <UsersListItem key={user.id} user={user} />;
  });

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
      </div>

      {isLoadingUsers ? (
        <Skeleton times={5} className="h-10 w-full" />
      ) : loadingUsersError ? (
        <div>Error while fetching data {loadingUsersError}</div>
      ) : (
        renderedUsers
      )}
    </div>
  );
};
export default UsersList;
