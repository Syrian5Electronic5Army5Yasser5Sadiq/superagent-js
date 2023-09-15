/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AppModelsResponseTool: core.serialization.ObjectSchema<
    serializers.AppModelsResponseTool.Raw,
    SuperAgent.AppModelsResponseTool
> = core.serialization.object({
    success: core.serialization.boolean(),
    data: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace AppModelsResponseTool {
    interface Raw {
        success: boolean;
        data?: Record<string, unknown> | null;
    }
}
