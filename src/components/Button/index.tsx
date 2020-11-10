import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
// !enum
interface IButtomProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: 'small';
  width?: string;
}

const Button: React.FC<IButtomProps> = ({ children, onClick, color, size, width }) => {
  return (
    <button
      type="button"
      className={cn(s.root, { [s.small]: size === 'small' })}
      onClick={onClick}
      style={{ background: `${color}`, width: `${width}` }}>
      {children}
    </button>
  );
};

export default Button;
