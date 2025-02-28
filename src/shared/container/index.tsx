import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div
    className={`bg-[#18191E] py-[60px] px-[40px] rounded-[30px] w-[90%] m-auto ${className}`}
  >
    {children}
  </div>
);

export default Container;
