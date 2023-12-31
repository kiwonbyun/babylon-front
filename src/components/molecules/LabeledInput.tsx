import React from 'react';
import Input from '@components/atoms/Input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  desc?: string;
}

const LabeledInput = ({ ...props }: InputProps) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <div>
        <label htmlFor={props.id} className="text-sm font-medium">
          {props.label}
        </label>
        {props.desc && <p className="text-xs text-gray500">{props.desc}</p>}
      </div>
      <Input {...props} />
    </div>
  );
};

export default LabeledInput;
