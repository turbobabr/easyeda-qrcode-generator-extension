import { generatePath, ErrorCorrectLevel } from './generator';
import { mm2pixel, mil2pixel, inch2pixel } from './units';

const importPath = (d) => {
  api('editorCall',{ 
    cmd:'importByPathD', 
    args:[d]
  });
};

const generateCommandHandler = () => {    
  importPath(generatePath('Hello World!', mm2pixel(20)),{
    typeNumber: 5,
    errorCorrectLevel: ErrorCorrectLevel.H
  });
};

const buildCmdId = (extensionId, id) => {
  return `extension-${extensionId}-${id}`;
};

const initCommandHandlers = (extensionId) => {
  const cmd = (id, fn) => {    
    return {
      [buildCmdId(extensionId, id)]: fn
    };
  };

  api('createCommand', {
    ...cmd('generate',generateCommandHandler),
    ...cmd('about',() => {
      window.open('https://github.com/turbobabr/easyeda-qrcode-generator-extension','_blank');
    })    
  });
};

const initToolbarButton = (extensionId) => {
  api('createToolbarButton',{
    title: 'QRCode',
    fordoctype: 'pcb',
    menu: [
      {
        text: 'Generate...',
        cmd: buildCmdId(extensionId,'generate')        
      },
      '-',
      {
        text: 'About...',
        cmd: buildCmdId(extensionId,'about')        
      }
    ]
  });
};

((extensionId) => {  
  initCommandHandlers(extensionId);
  initToolbarButton(extensionId);
})('qrcode');