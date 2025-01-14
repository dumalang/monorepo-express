const env = (variableName: string, defaultValue = '') => {
  // console.log(
  //   'process.env[variableName]',
  //   variableName,
  //   process.env[variableName],
  // );
  return process.env[variableName] || defaultValue;
};

export {env};
