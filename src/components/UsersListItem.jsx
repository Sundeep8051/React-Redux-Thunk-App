import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button.jsx";
import useThunk from "../hooks/use-thunk.js";
import { deleteUser } from "../store/index.js";
import ExpandablePanel from "./ExpandablePanel.jsx";
import AlbumList from "./AlbumList.jsx";

const UsersListItem = ({ user }) => {
  const [deleteUserThunk, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleUserDelete = () => {
    deleteUserThunk(user);
  };

  const header = (
    <>
      <Button
        onClick={handleUserDelete}
        loading={isDeletingUser}
        className="mr-2"
      >
        <GoTrashcan className="" />
      </Button>{" "}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
};
export default UsersListItem;
