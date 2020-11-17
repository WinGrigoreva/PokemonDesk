import React from 'react';

interface IHeadingProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  className?: string;
}
const Heading: React.FC<IHeadingProps> = ({ children, size, className }) => {
  switch (size) {
    case 'xs':
      return <h6 className={className}>{children}</h6>;
    case 's':
      return <h5 className={className}>{children}</h5>;
    case 'm':
      return <h4 className={className}>{children}</h4>;
    case 'l':
      return <h3 className={className}>{children}</h3>;
    case 'xl':
      return <h2 className={className}>{children}</h2>;
    default:
      return <h1 className={className}>{children}</h1>;
  }
};

export default Heading;
