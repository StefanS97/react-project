const useCheckValid = () => {
  const checkValid = (myArr) => {
    let valid = true;
    myArr.map((item) => {
      if (item.trim().length < 1) {
        valid = false;
        return item;
      }
      return item;
    });
    return valid;
  };

  return { checkValid };
};

export default useCheckValid;
