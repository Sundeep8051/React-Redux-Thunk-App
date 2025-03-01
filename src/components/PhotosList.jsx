import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store/index.js";
import Skeleton from "./Skeleton.jsx";
import PhotosListItem from "./PhotosListItem.jsx";
import Button from "./Button.jsx";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-25 w-25" />;
  } else if (error) {
    content = <div>error</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between m-3">
        <h3 className="font-bold text-amber-600">
          Photo for the album {album.title}
        </h3>
        <Button onClick={handlePhotoAdd} loading={results.isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="flex m-4 space-x-2 flex-wrap">{content}</div>
    </>
  );
};
export default PhotosList;
