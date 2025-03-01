import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store/index.js";
import Skeleton from "./Skeleton.jsx";
import ExpandablePanel from "./ExpandablePanel.jsx";
import Button from "./Button.jsx";
import AlbumsListItem from "./AlbumsListItem.jsx";

const AlbumList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>error</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center m-3">
        <h3 className="font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAlbumAdd}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};
export default AlbumList;
