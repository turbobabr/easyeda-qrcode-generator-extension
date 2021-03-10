const qr = require('qr.js');
import path from './path';

const numberRoundToStepSlow = (value,step) => {
  return parseFloat(value.toFixed(step));
};

const rectRoundToStep = (rect,step) => {  
  return {
    x: numberRoundToStepSlow(rect.x,step),
    y: numberRoundToStepSlow(rect.y,step),
    width: numberRoundToStepSlow(rect.width,step),
    height: numberRoundToStepSlow(rect.height,step)
  };
};

export const ErrorCorrectLevel = {
	L : 1,
	M : 0,
	Q : 3,
	H : 2
};

const defaultOptions = {
  typeNumber: -1,
  errorCorrectLevel: ErrorCorrectLevel.H
}

export const generatePath = (str, size, options = defaultOptions) => {
  const res = qr(str,options);
  const qrPath = path();

  const cellHeight = size / res.modules.length;
  for (var row = 0; row < res.modules.length; row++) {
    for (var col = 0; col < res.modules[row].length; col++) {
      if (!res.modules[row][col]) {
        continue;
      }

      const cellWidth = size / res.modules[row].length;
      const rect = rectRoundToStep({
        x: col * cellWidth,
        y: row * cellHeight,
        width: cellWidth,
        height: cellHeight
      },2);

      qrPath.rect(rect.x, rect.y, rect.width, rect.height);
    }
  }

  return qrPath.toString();
};