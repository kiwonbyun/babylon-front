import React, { forwardRef } from 'react';
import Input from '@components/atoms/Input';
import Exclamation from '../icons/Exclamation';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  desc?: string;
  error?: string[] | string;
  horizontal?: boolean;
}

const LabeledInput = forwardRef<HTMLInputElement, InputProps>(
  function LabeledInput({ horizontal = false, ...props }, ref) {
    return (
      <div
        className={clsx('flex items-start gap-1', {
          'flex-col': !horizontal,
          'items-center': horizontal,
        })}
      >
        <div>
          <label
            htmlFor={props.id}
            className={clsx('text-sm font-medium flex items-center gap-2', {
              'w-24': horizontal,
            })}
          >
            {props.label}
            {props?.error && (
              <p className="text-xs text-red500 flex items-center gap-1">
                <Exclamation className="h-4 w-4" />
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
