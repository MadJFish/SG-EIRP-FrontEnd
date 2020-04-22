/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var config: Config;
interface Config {
  apiUrl: string;
}