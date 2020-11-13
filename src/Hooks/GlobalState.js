import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  indexOpen: false,
  showIndex: false,
  Personal1Open: false,
  Personal2Open: false,
  Personal3Open: false,
  Personal4Open: false,
  Personal5Open: false,
  Business1Open: false,
  Business2Open: false,
  Business3Open: false,
  Business4Open: false,
  Business5Open: false,
  Business6Open: false,
  Payback: false,
  PaybackPayment: false,
  PaymentConfirmation: false,
});

export const changeIndexOpen = () => {
    setGlobalState('indexOpen', (v) => true);
};

export const changeShowOpen = () => {
    setGlobalState('showIndex', (v) => true);
};

export const changePersonal1Open = () =>{
    setGlobalState('Personal1Open', (v) => true);
};

export const changePersonal2Open = () => {
    setGlobalState('Personal2Open', (v) => true);
}
export const changePersonal3Open = () => {
    setGlobalState('Personal3Open', (v) => true); 
}

export const changePersonal4Open =()=>{
    setGlobalState('Personal4Open', (v) => true);
}
export const changePersonal5Open =()=>{
    setGlobalState('Personal5Open', (v) => true);
}

export const changeBusiness1Open = () =>{
    setGlobalState('Business1Open', (v) => true);
}
export const changeBusiness2Open = () =>{
    setGlobalState('Business2Open', (v) => true);
}
export const changeBusiness3Open = () =>{
    setGlobalState('Business3Open', (v) => true);
}
export const changeBusiness4Open = () =>{
    setGlobalState('Business4Open', (v) => true);
}
export const changeBusiness5Open = () =>{
    setGlobalState('Business5Open', (v) => true);
}
export const changeBusiness6Open = () =>{
    setGlobalState('Business6Open', (v) => true);
}

export const changePayback = ()  => {
    setGlobalState('Payback', (v) => true);
}

export const changePaybackPayment = () => {
    setGlobalState('PaybackPayment', (v) => true);
}
export const changePaaybackCnfirmation = () => {
    setGlobalState('PaymentConfirmation', (v) => true);
}

export { useGlobalState };