import React, { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

function ProfilePhotoSelect({ image, setImage }) {
  const inputRef = useRef(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewURL(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewURL(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="relative w-28 h-28 group flex items-center justify-center">
      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Profile Image or Placeholder */}
      <div className="w-full h-full rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 overflow-hidden shadow-md">
        {image ? (
          <img
            src={previewURL}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        ) : (
          <LuUser className="text-4xl" />
        )}
      </div>

      {/* Upload Button Overlay */}
      <button
        type="button"
        onClick={onChooseFile}
        className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center border-2 border-white dark:border-gray-900 transition-shadow shadow-md hover:cursor-pointer"
        title={image ? 'Change Photo' : 'Upload Photo'}
      >
        <LuUpload className="text-base" />
      </button>

      {/* Optional: Remove button on hover if image is uploaded */}
      {image && (
        <button
          type="button"
          onClick={handleRemoveImage}
          className="absolute top-0 right-0 w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm flex items-center justify-center border-2 border-white dark:border-gray-900 shadow-md"
          title="Remove Photo"
        >
          <LuTrash />
        </button>
      )}
    </div>
  );
}

export default ProfilePhotoSelect;
