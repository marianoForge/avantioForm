import * as yup from "yup";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setOwnerData } from "./ownerSlice";

import Input from "../../formComponents/Input";
import { emailRegex, ownerDataSchema } from "../../../validations/schemas";
import Button from "../../formComponents/Button";
import { RootState } from "../../../store";

const AccommodationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const ownerData = useSelector(
    (state: RootState) => state.ownerForm.ownerData
  );

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

  const disabledButton =
    name === "" ||
    email === "" ||
    !emailRegex.test(email) ||
    phone === "" ||
    validationError !== null;

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
      {validationError && (
        <p className="text-red-500 mb-4">{validationError}</p>
      )}
      <div className="mt-10 flex flex-col items-center justify-center">
        <Button
          type="submit"
          label="Next"
          className="block w-1/2 text-center text-sm font-semibold shadow-sm disabled:opacity-30"
          disabled={disabledButton}
        />
      </div>
    </form>
  );
};

export default AccommodationForm;
