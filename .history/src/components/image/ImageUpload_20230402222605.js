import React from "react";

const ImageUpload = (props) => {
  const { name, className = "", image = "", ...rest } = props;
  return (
    <label
      className={`cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full min-h-[200px] rounded-lg ${className} relative overflow-hidden`}
    >
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...rest}
      />

      <div className="flex flex-col items-center text-center pointer-events-none">
        <img
          src="/img-upload.png"
          alt="upload-img"
          className="max-w-[80px] mb-5"
        />
        <p className="font-semibold">Choose photo</p>
      </div>

      <img src={image} className="w-full h-full object-cover" alt="" />

      <div className="absolute w-10 h-1 bg-green-400 bottom-0 left-0 transition-all image-upload-progress"></div>
    </label>
  );
};

export default ImageUpload;
