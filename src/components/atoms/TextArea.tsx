import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string[] | string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={clsx(
          'border resize-none rounded outline-none p-4 border-gray300 focus:border-blue400',
          props.className,
          {
            'border-red500': props.error,
          }
        )}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
