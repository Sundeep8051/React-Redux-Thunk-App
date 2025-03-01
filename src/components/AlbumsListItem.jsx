import React from "react";
import ExpandablePanel from "./ExpandablePanel.jsx";
import Button from "./Button.jsx";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store/index.js";
import PhotosList from "./PhotosList.jsx";

const AlbumsListItem = ({ album }) => {
  const [deleteAlbum, results] = useDeleteAlbumMutation();
  const handleAlbumDelete = () => {
    deleteAlbum(album);
  };
  const header = (
    <div className="flex items-center">
      <Button
        loading={results.isLoading}
        onClick={handleAlbumDelete}
        className="mr-2"
      >
        <GoTrashcan className="" />
      </Button>{" "}
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel header={header} key={album.id}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};
export default AlbumsListItem;
