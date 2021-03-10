export const mm2pixel = (value) => {
  return api('unitConvert', {
    type: 'mm2pixel',
    value
  });
};

export const mil2pixel = (value) => {
  return api('unitConvert', {
    type: 'mil2pixel',
    value
  });
};

export const inch2pixel = (value) => {
  return api('unitConvert', {
    type: 'inch2pixel',
    value
  });
};