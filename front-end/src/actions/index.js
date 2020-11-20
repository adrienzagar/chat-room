/* eslint-disable import/prefer-default-export */
// Action Types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE = 'CHANGE';
export const LOGIN = 'LOGIN';
export const WS_CONNECT = 'WS_CONNECT';

// Action Creators
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const setMessageValue = (messageValue) => ({
  type: SET_MESSAGE_VALUE,
  messageValue,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const change = (key, value) => ({
  type: CHANGE,
  key,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});
