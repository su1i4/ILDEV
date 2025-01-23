import React from "react";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
  return <div className="w-full wrapper">{children}</div>;
};

export default AnimatedBackground
