import React from 'react';

interface IHeadingProps {
  size?: 'xs' | 'xl';
  className?: string;
}
const Heading: React.FC<IHeadingProps> = ({ children, size, className }) => {
  switch (size) {
    case 'xs':
      return <h6 className={className}>{children}</h6>;
    default:
      return <h1 className={className}>{children}</h1>;
  }
};

export default Heading;
