import { Controller } from './controllerDef';

/**
 * 载入文件
 * @param path
 */

export const loadFile: Controller = async (e, args) => {
  console.log(e.type, args);
  e.reply(e.type);
};

/**
 * 创建并写入文件
 * @param path:string
 * @param content:string
 */
export const createAndWriteFile: Controller = async (e, args) => {
  console.log(e.type, args);
  e.reply(e.type);
};
/**
 * 加载配置文件
 * @param e
 * @param args
 */
export const loadConfigFile: Controller = async (e, args) => {
  console.log(e.type, args);
  e.reply(e.type);
};
