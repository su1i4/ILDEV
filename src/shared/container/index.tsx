import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={`bg-[#18191E] py-[60px] px-[40px] rounded-[30px] w-[90%] m-auto`}>
    {children}
  </div>
);

export default Container;
