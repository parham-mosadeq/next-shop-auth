import React from 'react';
import { toast } from 'react-toastify';

type Txt = string;

export const successToast = (txt: Txt) =>
  toast.success(txt, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export const warnToast = (txt: Txt) =>
  toast.warn(txt, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
