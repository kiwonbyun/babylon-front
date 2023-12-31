import React from 'react';
import Input from '@components/atoms/Input';
import Exclamation from '../icons/Exclamation';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  desc?: string;
  error?: string[];
}

const LabeledInput = ({ ...props }: InputProps) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <div>
        <label
          htmlFor={props.id}
          className="text-sm font-medium flex items-center gap-2"
        >
          {props.label}
          {props?.error && (
            <p className="text-xs text-red500 flex items-center gap-1">
              <Exclamation className="h-4 w-4" />
              {props.error}
            </p>
          )}
        </label>
        {props.desc && <p className="text-xs text-gray500">{props.desc}</p>}
      </div>
      <Input {...props} error={props?.error} />
    </div>
  );
};

export default LabeledInput;
