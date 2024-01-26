'use client';
import { RadioGroup } from '@headlessui/react';
import React, { useState } from 'react';
import clsx from 'clsx';
import CheckCircle from '../icons/CheckCircle';

type RadioItem = {
  name: string;
  desc: string;
  icon: React.ReactNode;
  key: string;
};

interface CustomRadioProps {
  items: RadioItem[];
  handleChange?: (e: any) => void;
}

function CustomRadio({ items, handleChange }: CustomRadioProps) {
  const [selected, setSelected] = useState(items[0]);
  const onChange = (e: RadioItem) => {
    setSelected(e);
    if (handleChange) handleChange(e);
  };

  return (
    <div className="w-full py-4">
      <div className="mx-auto w-full">
        <RadioGroup value={selected} onChange={onChange}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-x-2 flex justify-start">
            {items.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky300'
                      : 'ring-1 ring-gray300/40'
                  }
                  ${checked ? 'bg-sky900/75 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm flex flex-col gap-1 w-full">
                          <RadioGroup.Label
                            as="p"
                            className={clsx(
                              'font-medium flex items-center gap-1',
                              {
                                'text-white': checked,
                                'text-gray900': !checked,
                              }
                            )}
                          >
                            {plan.name}
                            {checked && <CheckCircle className="!h-4 !w-4" />}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="p"
                            className={clsx('inline text-xs', {
                              'text-sky100': checked,
                              'text-gray500': !checked,
                            })}
                          >
                            <span>{plan.desc}</span>
                          </RadioGroup.Description>
                          <RadioGroup.Description className="w-full flex-box">
                            {plan.icon}
                          </RadioGroup.Description>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default CustomRadio;
