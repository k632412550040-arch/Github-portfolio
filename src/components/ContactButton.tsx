import React from 'react';

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ children = "Contact Me", className = "", ...props }) => {
  return (
    <button
      className={`rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white transition-all hover:scale-105 active:scale-95 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1'
      }}
      {...props}
    >
      {children}
    </button>
  );
};
