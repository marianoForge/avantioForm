import { FC, ChangeEvent } from "react";

type InputType =
  | "text"
  | "number"
  | "password"
  | "email"
  | "date"
  | "color"
  | "tel"
  | "url"
  | "file";

type ElementType = "input" | "textarea" | "select" | "file";

interface OptionType {
  value: string;
  label: string;
}

interface Props {
  value?: string | number | boolean;
  type?: InputType;
  placeholder?: string;
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onFileChange?: (files: FileList) => void;
  className?: string;
  id: string;
  multiple?: boolean;
  label: string;
  elementType: ElementType;
  options?: OptionType[];
}

const Input: FC<Props> = ({
  value,
  type,
  placeholder,
  onChange,
  onFileChange,
  className,
  id,
  label,
  elementType,
  multiple,
  options,
}) => {
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (type === "file") {
      handleFileChange(event as ChangeEvent<HTMLInputElement>);
    } else {
      onChange(event);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onFileChange && event.target.files) {
      onFileChange(event.target.files);
    }
  };
  return (
    <div className="mt-2.5">
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      {elementType === "input" && (
        <input
          id={id}
          type={type}
          value={value as string}
          placeholder={placeholder}
          onChange={handleChange}
          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
        />
      )}
      {elementType === "textarea" && (
        <textarea
          id={id}
          value={value as string}
          placeholder={placeholder}
          onChange={handleChange}
          rows={5}
          className={`border-2 border-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 ${className}`}
        />
      )}

      {elementType === "select" && (
        <select
          id={id}
          value={value as string}
          onChange={handleChange}
          className={`border-2 border-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 ${className}`}
        >
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {elementType === "file" && (
        <input
          id={id}
          type="file"
          multiple={multiple}
          onChange={handleChange}
          className={`focus:outline-none focus:border-blue-500 ${className}`}
        />
      )}
    </div>
  );
};

export default Input;
