import { useState } from 'react';

export default function useDialog() {
  const [isOpen, setIsOpen] = useState(false);
  function closeDialog() {
    setIsOpen(false);
  }

  function openDialog() {
    setIsOpen(true);
  }
  return { isOpen, closeDialog, openDialog, setIsOpen };
}
