import React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
}

const icons = {
  alert: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
    />
  ),
};

const SvgIcon = ({ name, ...props }: SvgIconProps) => {
  if (!name) return null;

  if (!icons[name]) {
    throw new Error(`SvgIcon: ${name} is not a valid icon name`);
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      {icons[name]}
    </svg>
  );
};
export default SvgIcon;
