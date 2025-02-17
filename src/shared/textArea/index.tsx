interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  props?: any;
}

export const TextArea = ({
  value,
  onChange,
  placeholder,
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      className="w-full h-[164px] p-3 text-lg rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-[#323232] text-[#646464] placeholder-gray-400"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};
