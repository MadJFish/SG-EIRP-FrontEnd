import { GloblConstants } from "./global-constants";
import { Code } from "app/_models";

export class CommonUtils {
    public static getUserAPI(api: string) {
        return GloblConstants.baseUrl + GloblConstants.userUrl + api;
        //return GloblConstants.localUserBaseUrl + GloblConstants.userUrl + api;
    }

    public static getTutorAPI(api: string) {
        return GloblConstants.localTutorBaseUrl + GloblConstants.tutorUrl + api;
    }

    public static mapCodeValue(codes: Code[], values: boolean[]) {
        let results: string[] = [];
        let minAmount = Math.min(codes.length, values.length);
        var i: number;
        
        for (i = 0; i < minAmount; ++i) {
            if (values[i]) {
                results.push(codes[i].description);
            }
        }
        return results;
    }
}