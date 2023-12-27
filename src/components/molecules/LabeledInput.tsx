import React from 'react';
import Input from '@components/atoms/Input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const LabeledInput = ({ ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id} className="text-xs">
        {props.label}
      </label>
      <Input {...props} />
    </div>
  );
};

export default LabeledInput;
