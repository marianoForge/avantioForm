import * as yup from "yup";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setAccommodationData } from "./accommodationSlice";
import { accommodationSchema } from "../../../validations/schemas";

import Input from "../../formComponents/Input";
import ImageDisplay from "../../formComponents/ImageDisplay";
import Button from "../../formComponents/Button";

const AccommodationForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [validationError, setValidationError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accommodationData = {
      name,
      address,
      description,
      type,
      images,
    };

    try {
      await accommodationSchema.validate(accommodationData);
      dispatch(setAccommodationData(accommodationData));
      navigate("/owner");
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setValidationError(error.message);
      }
    }
  };

  const handleImageValidation = (files: FileList) => {
    if (images.length + files.length <= 2) {
      for (let i = 0; i < files.length; i++) {
        const img = new (window as any).Image() as HTMLImageElement;
        const url = URL.createObjectURL(files[i]);
        img.onload = function () {
          if (img.width > 500 || img.height > 500) {
            alert("Image dimensions should not exceed 500x500 pixels");
          } else {
            setImages((prevImages) => [...prevImages, files[i]]);
          }
        };
        img.src = url;
      }
    } else {
      alert("You can only select up to 2 images.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {validationError && (
        <p className="text-red-500 mb-4">{validationError}</p>
      )}
      <Input
        id="name"
        type="text"
        elementType="input"
        value={name}
        placeholder="John Doe"
        onChange={(e) => setName(e.target.value)}
        label={"Name"}
      />

      <Input
        id="address"
        type="text"
        elementType="input"
        value={address}
        placeholder="Accomodation Address"
        onChange={(e) => setAddress(e.target.value)}
        label={"Address"}
      />

      <Input
        id="description"
        label="Description"
        type="text"
        placeholder="Enter description"
        elementType="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Input
        id="type"
        elementType="select"
        value={type}
        placeholder="Accomodation Address"
        onChange={(e) => setType(e.target.value)}
        label={"Type of Accomodation"}
        options={[
          { value: "", label: "Select an option" },
          { value: "Apartment", label: "Apartment" },
          { value: "House", label: "House" },
          { value: "Villa", label: "Villa" },
        ]}
      />

      <Input
        id="images"
        label="Upload Images (Max 2) - Optional"
        type="file"
        elementType="input"
        multiple
        onChange={(e) => {}}
        onFileChange={handleImageValidation}
      />
      {validationError && (
        <p className="text-red-500 mb-4">{validationError}</p>
      )}
      {images.length > 0 && <ImageDisplay images={images} />}

      <div className="my-10 flex flex-col items-center justify-center">
        <Button
          type="submit"
          label="Next"
          className="block w-1/2 text-center text-sm font-semibold shadow-sm"
        />
      </div>
    </form>
  );
};

export default AccommodationForm;
