// src/atoms/todoAtom.js
import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [
    { id: 1, text: 'Ansh', isCompleted: false },
    { id: 2, text: 'Dhwanit', isCompleted: false },
  ],
});
