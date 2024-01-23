import React, { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '../atoms/Button/Button';

interface ICustomDialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  title?: string;
  description?: string | ReactNode;
  onConfirm?: () => void;
}

function CustomDialog({
  isOpen,
  closeDialog,
  title,
  description,
  onConfirm = () => {},
}: ICustomDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray900"
                >
                  {title ?? null}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray500">{description ?? ''}</p>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button className="!bg-black text-white" onClick={onConfirm}>
                    확인
                  </Button>
                  <Button onClick={closeDialog}>닫기</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CustomDialog;
