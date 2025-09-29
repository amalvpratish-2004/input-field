import React, { useState } from "react";
import clsx from "clsx";
import { Eye, EyeOff, X } from "lucide-react";
import { motion } from "motion/react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  type?: "text" | "password";
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
  dark?: boolean;
}

export const InputField = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  type = "text",
  variant = "outlined",
  size = "md",
  clearable = false,
  dark = false,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputClass = clsx(
    "w-full rounded-lg border transition-all duration-200 focus:outline-none",
    {
      "border-gray-300 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100":
        variant === "outlined" && !invalid && !dark,
      "border-gray-600 bg-gray-900 text-white focus:border-blue-400 focus:ring-4 focus:ring-blue-900":
        variant === "outlined" && !invalid && dark,

      "border-transparent bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100":
        variant === "filled" && !invalid && !dark,
      "border-transparent bg-gray-800 text-white focus:bg-gray-700 focus:border-blue-400":
        variant === "filled" && !invalid && dark,

      "border-transparent border-b-gray-300 bg-transparent focus:border-blue-500":
        variant === "ghost" && !invalid && !dark,
      "border-transparent border-b-gray-600 bg-transparent text-white focus:border-blue-400":
        variant === "ghost" && !invalid && dark,

      "px-3 py-2 text-sm": size === "sm",
      "px-4 py-3 text-base": size === "md",
      "px-5 py-4 text-lg": size === "lg",

      "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100": invalid && !dark,
      "border-red-400 focus:border-red-400": invalid && dark,
      "opacity-50 cursor-not-allowed bg-gray-100": disabled,
    }
  );

  const containerClass = clsx(
    "flex flex-col gap-2 w-full",
    disabled && "opacity-60"
  );

  return (
    <div className={containerClass}>
      {label && (
        <label
          className={clsx("text-sm font-medium", {
            "text-gray-700": !invalid && !dark,
            "text-gray-300": !invalid && dark,
            "text-red-600": invalid && !dark,
            "text-red-400": invalid && dark,
          })}
        >
          {label}
        </label>
      )}

      <motion.div 
        className="relative"
        whileHover={{ scale: 1.03 }}
      >
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClass}
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={clsx(
                "p-1 rounded transition-colors",
                dark 
                  ? "text-gray-400 hover:text-gray-200" 
                  : "text-gray-400 hover:text-gray-600"
              )}
              disabled={disabled}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}

          {clearable && value && (
            <button
              type="button"
              onClick={() =>
                onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
              }
              className={clsx(
                "p-1 rounded transition-colors",
                dark 
                  ? "text-gray-400 hover:text-gray-200" 
                  : "text-gray-400 hover:text-gray-600"
              )}
              disabled={disabled}
            >
              <X size={18} />
            </button>
          )}
        </div>
      </motion.div>

      {(helperText || errorMessage) && (
        <div className="min-h-[20px]">
          {helperText && !invalid && (
            <small className={clsx(
              "text-xs",
              dark ? "text-gray-400" : "text-gray-500"
            )}>
              {helperText}
            </small>
          )}
          {errorMessage && invalid && (
            <small className={clsx(
              "text-xs",
              dark ? "text-red-400" : "text-red-600"
            )}>
              {errorMessage}
            </small>
          )}
        </div>
      )}
    </div>
  );
};