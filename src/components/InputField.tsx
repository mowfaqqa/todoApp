/* eslint-disable require-jsdoc */
import React from "react";
import clsx from "clsx";

interface InputProps {
    type?: string;
    rows?: number;
    placeholder?: string;
    id?: string;
    label?: string;
    required?: boolean;
    inputProps?: any;
    error?: boolean;
    className?: any;
    requirement?: any;
    helperText?: string | boolean;
    [key: string]: any;
  }
  export const InputField = (props: InputProps): JSX.Element => {
    const {
      type,
      id,
      label,
      error,
      required,
      inputProps,
      className,
      helperText,
      placeholder,
      requirement,
    } = props;
  
    return (
      <div className={clsx(className, "my-3")}>
        <label
          htmlFor={id}
          className="relative text-sm font-medium text-gray-700 text-left"
         >
          {label}
          {requirement === true ? (
            <span className=" text-red-500 text-left">
              {" "}
              <span>*</span>
            </span>
          ) : null}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type={type}
            {...inputProps}
            required={required}
            placeholder={placeholder}
            className="border-b border-gray-500 border-solid py-3 px-4 w-full focus:border-b focus:outline-none bg-white"
          />
          {error && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  };