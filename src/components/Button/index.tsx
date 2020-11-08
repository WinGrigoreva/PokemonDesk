import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface IButtomProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: string;
  width?: string;
}

const Button: React.FC<IButtomProps> = ({ children, onClick, color, size, width }) => {
  return (
    <button
      type="button"
      className={cn(s.root, `${size}`)}
      onClick={onClick}
      style={{ background: `${color}`, width: `${width}` }}>
      {children}
    </button>
  );
};

export default Button;
