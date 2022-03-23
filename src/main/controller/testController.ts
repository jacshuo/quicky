import { IpcMainEvent } from 'electron';
import { ipcChannelDef } from '../../common/ipcChannelDef';

export default async (ipcEvent: IpcMainEvent, arg: any) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  ipcEvent.reply(ipcChannelDef.TEST_CHANNEL, 'pong!');
};
