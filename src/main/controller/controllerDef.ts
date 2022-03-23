import { IpcMainEvent } from 'electron';

export type Controller = (e: IpcMainEvent, ...args) => void;
