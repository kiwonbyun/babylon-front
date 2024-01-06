import React, { forwardRef } from 'react';
import Input from '@components/atoms/Input';
import Exclamation from '../icons/Exclamation';
import TextArea from '../atoms/TextArea';

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  desc?: string;
  error?: string[] | string;
}

const LabeledTextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  function LabeledTextArea(props, ref) {
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
                {typeof props.error === 'object' ? props.error[0] : props.error}
              </p>
            )}
          </label>
          {props.desc && <p className="text-xs text-gray500">{props.desc}</p>}
        </div>
        <TextArea {...props} error={props?.error} ref={ref} />
      </div>
    );
  }
);

export default LabeledTextArea;
