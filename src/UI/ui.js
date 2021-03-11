import './styles.scss';
import Content from './content.html';
import { generatePath } from '../generator';
import { parseUnitBasedValue } from '../units';

const isStringEmpty = (str) => {
  return !str || str === "";
};

let cachedDialog = null;

let state = {
  content: '',
  size: null
};

const isCurrentStateValid = () => {
  return !isStringEmpty(state.content) && state.size !== null;
};

const updatePlaceButton = () => {
  const isValid = isCurrentStateValid();      
  const el = $('#qrcode-place-btn');
  if(isValid) {
    el.removeClass('disabled');
  } else {      
    el.addClass('disabled');
  }    
}

const updateQRCodePreview = (value) => {    
  const emptyStateContainer = $('#qrcode-preview-empty-state-container');
  const svgContainer = $('#qrcode-preview-svg-container');
  if(!isStringEmpty(value)) {
    emptyStateContainer.hide();
    svgContainer.show();
    $('#qrcode-preview-path-el').attr("d",generatePath(value,200));      
  } else {
    emptyStateContainer.show();
    svgContainer.hide();      
    $('#qrcode-preview-path-el').attr("d","");      
  }    
};

export const createSettingsDialog = (actionCommandId) => {
  if(cachedDialog) {
    return cachedDialog;
  }

  const dlg = api('createDialog', {
    title: "QR Code Generator",
    content: Content,
    width: 300,
    modal: false,
    collapsible: false,
    resizable: false,    
  });

  $('#qrcode-content-textarea').on('input',(e) => {  
    const value = e.originalEvent.target.value;
    state.content = value;
    updateQRCodePreview(value);
    updatePlaceButton();
  });

  $('#qrcode-size-input').on('input',(e) => {  
    const value = e.originalEvent.target.value;
    state.size = parseUnitBasedValue(value)

    updatePlaceButton();
  });

  updateQRCodePreview();
  updatePlaceButton();
  cachedDialog = dlg;

  return dlg;
}

export const resetState = () => {
  state = {
    content: '',
    size: null
  };

  $('#qrcode-size-input').val("");
  $('#qrcode-content-textarea').val("");
  updateQRCodePreview();
  updatePlaceButton();
};

export const focusOnFirstInput = () => {
  $('#qrcode-size-input').focus();
};

export const show = () => {
  if(!cachedDialog) {
    return;
  }

  cachedDialog.dialog('open');
};

export const getProps = () => {
  return state;
};