import {
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";
import { IFormAIGCInput } from "./formAIGC";

interface TextInputProps<T extends FieldValues> {
  label?: string;
  placeholder?: string;
  postfix?: string;
  required?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldErrors<IFormAIGCInput>;
  name: Path<T>;
}

export default function TextInput<T extends FieldValues>({
  label,
  placeholder,
  postfix,
  required,
  register,
  name,
  errors,
}: TextInputProps<T>) {
  const registerOptions: RegisterOptions = {};
  if (required) {
    registerOptions.required = "This field is required";
  }
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <div className="relative w-full">
        <input
          type="text"
          className="pl-3 pr-8 py-2 border rounded w-full"
          placeholder={placeholder}
          {...register(name, registerOptions)}
        />
        {postfix && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400">{postfix}</span>
          </div>
        )}
      </div>
      {errors && (
        <p className="text-red-600 text-left text-sm">
          {errors?.name?.message}
        </p>
      )}
    </label>
  );
}
