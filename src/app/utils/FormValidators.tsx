export const onlyNumbersMinOne = {
  pattern: {
    value: /^[1-9]\d*$/,
    message: 'Only numbers allowed, minimum is 1',
  },
};

export const restrictToNumbersMinOne = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];

  const isDigit = /^[0-9]$/.test(e.key);
  const isLeadingZero = e.currentTarget.value === '' && e.key === '0';

  if (!isDigit && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }

  if (isLeadingZero) {
    e.preventDefault();
  }
};

export const onlyNumbersMinZero = {
  pattern: {
    value: /^\d+(\.\d+)?$/,
    message: 'Only numbers allowed, minimum is 0',
  },
};

export const restrictToNumbersMinZero = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];

  const isDigit = /^[0-9]$/.test(e.key);
  const isDot = e.key === '.' && !e.currentTarget.value.includes('.');

  if (!isDigit && !isDot && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
};

export const validateIndianMobile = {
  pattern: {
    value: /^[6-9]\d{9}$/,
    message: 'Enter valid 10-digit Indian mobile number',
  },
};

export const restrictToIndianMobile = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
  const isDigit = /^[0-9]$/.test(e.key);

  if (!isDigit && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
};

export const validateOtp = {
  required: 'OTP is required!',
  pattern: {
    value: /^\d{6}$/,
    message: 'OTP must be exactly 6 digits!',
  },
};

export const restrictToOtp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
  const isDigit = /^[0-9]$/.test(e.key);
  const value = e.currentTarget.value;

  if ((!isDigit && !allowedKeys.includes(e.key)) || value.length >= 6 && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
};

export const validate4DigitOtp = {
  required: 'OTP is required',
  pattern: {
    value: /^\d{4}$/,
    message: 'OTP must be exactly 4 digits',
  },
};

export const restrictToOtp4Digit = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
  const isDigit = /^[0-9]$/.test(e.key);
  const value = e.currentTarget.value;

  if ((!isDigit && !allowedKeys.includes(e.key)) || value.length >= 4 && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
};