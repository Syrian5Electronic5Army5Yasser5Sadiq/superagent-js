/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const ToolList: core.serialization.ObjectSchema<serializers.ToolList.Raw, SuperAgent.ToolList> =
    core.serialization.object({
        success: core.serialization.boolean(),
        data: core.serialization
            .list(core.serialization.record(core.serialization.string(), core.serialization.unknown()))
            .optional(),
    });

export declare namespace ToolList {
    interface Raw {
        success: boolean;
        data?: Record<string, unknown>[] | null;
    }
}
