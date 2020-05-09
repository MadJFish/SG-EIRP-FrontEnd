import { GloblConstants } from "./global-constants";

export class CommonUtils {
    public static getUserAPI(api: string) {
        return GloblConstants.baseUrl + GloblConstants.userUrl + api;
        //return GloblConstants.localUserBaseUrl + GloblConstants.userUrl + api;
    }

    public static getTutorAPI(api: string) {
        return GloblConstants.localTutorBaseUrl + GloblConstants.tutorUrl + api;
    }
}