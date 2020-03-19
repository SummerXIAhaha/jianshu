const checker =  {
  nameChecker: (name) => {
    console.log(name);
  },

  emailChecker: (email) => {
    const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则表达式
    return reg.test(email);
  }
};

module.exports = checker;