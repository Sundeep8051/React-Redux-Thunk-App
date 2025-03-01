import React from "react";
import { useDeletePhotoMutation } from "../store/index.js";
import Button from "./Button.jsx";
import { GoTrashcan } from "react-icons/go";

const PhotosListItem = ({ photo }) => {
  const [deletePhoto, results] = useDeletePhotoMutation();

  const handlePhotoDelete = () => {
    deletePhoto(photo);
  };
  return (
    <div className="relative cursor-pointer m-2">
      <img src={photo.url} alt="album photo" />
      <div
        onClick={handlePhotoDelete}
        className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80"
      >
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
};
export default PhotosListItem;
