import { useState } from "react";

const useCheckValid = () => {
  const [valid, setValid] = useState(true);

  const checkValid = (myArr) => {
    let valid = true;
    myArr.map((item) => {
      if (item.trim().length < 1) {
        valid = false;
        setValid(false);
        setTimeout(() => setValid(true), 3000);
        return item;
      }
      return item;
    });
    return valid;
  };

  return { checkValid, valid };
};

export default useCheckValid;
