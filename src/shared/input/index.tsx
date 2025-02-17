import * as React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "checkbox" | "password" | "email" | "text" | "phone";
  className?: string;
  placeholder: string;
  required: boolean;
  props?: any;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        onChange={onChange}
        className={`w-full px-4 py-2 text-[18px] font-[400] text-[#646464] bg-[#323232] rounded-[53px] border border-gray-600 focus:border-gray-400  focus:outline-none placeholder-gray-400 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
