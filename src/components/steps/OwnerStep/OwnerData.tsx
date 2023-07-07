import * as yup from "yup";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setOwnerData } from "./ownerSlice";

import Input from "../../formComponents/Input";
import { ownerDataSchema } from "../../../validations/schemas";

const AccommodationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ownerData = {
      name,
      email,
      phone,
    };

    try {
      await ownerDataSchema.validate(ownerData);
      dispatch(setOwnerData(ownerData));
      navigate("/summary");
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setValidationError(error.message);
      }
    }
  };

  return (
    <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
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
        id="email"
        type="email"
        elementType="input"
        value={email}
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
        label={"Email"}
      />

      <Input
        id="phone"
        type="tel"
        elementType="input"
        value={phone}
        placeholder="Enter Your Phone Number"
        onChange={(e) => setPhone(e.target.value)}
        label="Phone"
      />

      <div className="mt-10">
        {validationError && (
          <p className="text-red-500 mb-4">{validationError}</p>
        )}
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default AccommodationForm;