import * as React from "react";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onCheckedChange,
  className,
}) => {
  return (
    <button
      type="button"
      className={`w-[27px] h-[27px] xs:w-[20px] xs:h-[20px] xs:min-w-[20px] flex items-center justify-center border-2 rounded-md transition-all 
        ${
          checked
            ? "bg-blue-500 border-blue-500"
            : "bg-transparent border-[#FFFFFF]"
        } 
        ${className}`}
      onClick={() => onCheckedChange(!checked)}
    >
      {checked && <Check className="w-[27px] h-[27px] text-white" />}
    </button>
  );
};
