import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Key } from "react";
import Button from "../../formComponents/Button";

const SummaryForm = () => {
  const accommodationData = useSelector(
    (state: RootState) => state.accommodationForm.accommodationData
  );
  const ownerData = useSelector(
    (state: RootState) => state.ownerForm.ownerData
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const event = new CustomEvent("formSubmitted", {
      detail: { accommodationData, ownerData },
    });

    window.dispatchEvent(event);
  };

  const styles = {
    container: "flex flex-col gap-10",
    title_h3: "mt-3 text-lg font-semibold leading-6 text-indigo-700",
    title_h4: "mt-3 text-md font-semibold leading-6 text-gray-900",
    values: "line-clamp-3 text-sm leading-6 text-gray-600",
    img: "mt-2 w-50 h-50 object-cover border-2  border-gray-300",
  };

  return (
    <div className={styles.container}>
      <div className="group relative">
        <h3 className={styles.title_h3}>
          <span className="absolute inset-0"></span>
          Accomodation Information
        </h3>
        <h4 className={styles.title_h4}>
          <span className="absolute inset-0"></span>
          Name
        </h4>
        <p className={styles.values}>{accommodationData.name}</p>
        <h4 className={styles.title_h4}>
          <span className="absolute inset-0"></span>
          Description
        </h4>
        <p className={styles.values}>{accommodationData.description}</p>
        <h4 className={styles.title_h4}>
          <span className="absolute inset-0"></span>
          Type of Accommodation:
        </h4>
        <p className={styles.values}>{accommodationData.type}</p>
      </div>
      <div>
        <h4 className={styles.title_h4}>
          <span className="absolute inset-0"></span>
          Accommodation Images
        </h4>
        {accommodationData.images.map(
          (image: Blob | MediaSource, index: Key | null | undefined) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt=""
              className={styles.img}
            />
          )
        )}
      </div>
      <div className="group relative">
        <h3 className={styles.title_h3}>
          <span className="absolute inset-0"></span>
          Owner Information
        </h3>
        <h4 className={styles.title_h4}>
          <span className="absolute inset-0"></span>
          Name
        </h4>
        <p className={styles.values}>{ownerData.name}</p>
        <h4 className={styles.title_h4}>
          <span className="absolute inset-0"></span>
          Email
        </h4>
        <p className={styles.values}>{ownerData.email}</p>
        <h4 className={styles.title_h4}>
          <span className="absolute inset-0"></span>
          Telephone
        </h4>
        <p className={styles.values}>{ownerData.phone}</p>
      </div>
      <div className="my-10 flex flex-col items-center justify-center">
        <Button
          type="submit"
          label="Submit"
          className="block w-1/2 text-center text-sm font-semibold shadow-sm"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default SummaryForm;
