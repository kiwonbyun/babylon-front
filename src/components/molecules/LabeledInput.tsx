import React from 'react';
import Input from '@components/atoms/Input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const LabeledInput = ({ ...props }: InputProps) => {
  return (
    <div>
      <Input {...props} />
    </div>
  );
};

export default LabeledInput;
