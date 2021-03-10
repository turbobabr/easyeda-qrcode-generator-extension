import parseUnit from 'parse-unit';

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

const unitToConverterMap = {
  'mm': mm2pixel,
  'mms': mm2pixel,
  'mil': mil2pixel,
  'mils': mil2pixel,
  'in': inch2pixel,
  'inch': inch2pixel,
  'inches': inch2pixel
};

const isString = val => typeof val === 'string';
const isValidNumber = value => true;

export const parseUnitBasedValue = (str) => {
  const parsed = parseUnit(str);
  
  if(isValidNumber(parsed[0]) && isString(parsed[1])) {
    const unit = parsed[1].toLowerCase();
    if(!unitToConverterMap[unit]) {
      return null;
    }

    return unitToConverterMap[unit](parsed[0]);
  }

  return null;
};