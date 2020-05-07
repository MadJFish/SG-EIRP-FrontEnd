import { GloblConstants } from "./global-constants";

export class CommonUtils {
    public static getAPI(api: string) {
        return GloblConstants.apiURL + api;
    }

    public static getServiceAPI(api: string) {
        return GloblConstants.serviceURL + api;
    }
}