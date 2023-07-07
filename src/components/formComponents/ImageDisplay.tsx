import React, { FC, useEffect, useState } from "react";

interface ImageDisplayProps {
  images: File[];
}
const ImageDisplay: FC<ImageDisplayProps> = ({ images }) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls: string[] = [];
    for (let i = 0; i < images.length; i++) {
      urls.push(URL.createObjectURL(images[i]));
    }
    setImageUrls(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {imageUrls.map((url, index) => (
        <div key={index} className="w-full h-full">
          <img
            className="object-cover w-full h-full"
            src={url}
            alt={`Uploaded ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
