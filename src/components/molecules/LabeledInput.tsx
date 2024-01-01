import React, { forwardRef } from 'react';
import Input from '@components/atoms/Input';
import Exclamation from '../icons/Exclamation';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  desc?: string;
  error?: string[] | string;
}

const LabeledInput = forwardRef<HTMLInputElement, InputProps>(
  function LabeledInput(props, ref) {
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
                <Exclamation className="h-3 w-3" />
                {typeof props.error === 'object' ? props.error[0] : props.error}
              </p>
            )}
          </label>
          {props.desc && <p className="text-xs text-gray500">{props.desc}</p>}
        </div>
        <Input {...props} error={props?.error} ref={ref} />
      </div>
    );
  }
);

export default LabeledInput;
