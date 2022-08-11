// Email validation here
export const validateEmail = (email) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email.toLowerCase());
};

// Password validation here
export const validatePassword = (password) => {
  const regEx = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&;*]{6,16}$/;
  return regEx.test(password.toLowerCase());
};
