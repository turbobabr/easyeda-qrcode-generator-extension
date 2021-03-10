import { generatePath } from './generator';
import * as UI from './UI/ui';

const importPath = (d) => {
  api('editorCall', {
    cmd: 'importByPathD',
    args: [d]
  });
};

const generateCommandHandler = (extensionId) => {
  UI.createSettingsDialog(buildCmdId(extensionId, 'place'));
  UI.resetState();
  UI.show();
  UI.focusOnFirstInput();
};

const placeCommandHandler = () => {  
  const props = UI.getProps();  
  console.log(props);
  importPath(generatePath(props.content, props.size));
};

const aboutCommandHandler = () => {
  window.open('https://github.com/turbobabr/easyeda-qrcode-generator-extension', '_blank');
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
    ...cmd('generate', () => { generateCommandHandler(extensionId); }),
    ...cmd('place', placeCommandHandler),
    ...cmd('about', aboutCommandHandler)
  });
};

const initToolbarButton = (extensionId) => {
  api('createToolbarButton', {
    title: 'QRCode',
    fordoctype: 'pcb',
    menu: [{
        text: 'Generate...',
        cmd: buildCmdId(extensionId, 'generate')
      },
      '-',
      {
        text: 'About...',
        cmd: buildCmdId(extensionId, 'about')
      }
    ]
  });
};

((extensionId) => {
  initCommandHandlers(extensionId);
  initToolbarButton(extensionId);
})('qrcode');