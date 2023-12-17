import React, { forwardRef } from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className="border resize-none rounded outline-none px-2 py-2"
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
