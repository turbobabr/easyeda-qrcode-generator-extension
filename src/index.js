import { generatePath } from './generator';
import * as UI from './UI/ui';
import { isRunnerAround} from './runner-api';
import { registerCommand, makeCommandId, importPath, navigateToPage } from './easy-api';

registerCommand('generate',() => {
  UI.createSettingsDialog(makeCommandId('place'));
  UI.resetState();
  UI.show();
  UI.focusOnFirstInput();
});

registerCommand('place',() => {
  const props = UI.getProps();    
  importPath(generatePath(props.content, props.size));
});

registerCommand('github',() => {
  navigateToPage('https://github.com/turbobabr/easyeda-qrcode-generator-extension');
});

if(!isRunnerAround()) {
  api('createToolbarButton', {
    title: 'QRCode',
    fordoctype: 'pcb',
    menu: [{
        text: 'Generate...',
        cmd: makeCommandId('generate')
      },
      '-',
      {
        text: 'Visit Github Page...',
        cmd: makeCommandId('github')
      }
    ]
  });
}



