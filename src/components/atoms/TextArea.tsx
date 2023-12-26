import React, { forwardRef } from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className="border resize-none rounded outline-none p-4 border-gray300 focus:border-blue400"
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
