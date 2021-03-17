export const shortId = () => {
  return 'qrcode';
};

export const makeCommandId = (commandId) => {
  return `extension-${shortId()}-${commandId}`;
};

export const registerCommand = (id, callback = () => {}) => {
  return api('createCommand', {
    [makeCommandId(id)]: callback
  });
};

export const navigateToPage = (url) => {
  window.open(url, '_blank');
};

export const importPath = (d) => {
  api('editorCall', {
    cmd: 'importByPathD',
    args: [d]
  });
};
