import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import PropTypes from "prop-types";
export default function Input({
  id = "",
  label = "",
  type = "text",
  onChange = null,
  isDisabled = false,
  placeholder = `${label.toLowerCase()}`,
  rightIcon,
  ...rest
}) {
  const [inputType, setInputType] = useState(type);

  const handleClick = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className="relative w-full rounded-[8px]">
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        className="rounded-lg px3 outline-none font-regular pl-10 borderless-input"
        onChange={onChange}
        disabled={isDisabled}
        {...rest}
      />

      {type === "password" ? (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleClick}
        >
          {inputType === "password" ? (
            <IoMdEyeOff color="#008080" />
          ) : (
            <IoMdEye color="#008080" />
          )}
        </div>
      ) : (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          {rightIcon}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "number", "email", "tel"]),
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  rightIcon: PropTypes.element,
};
