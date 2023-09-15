/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const AppModelsRequestAgentInvoke: core.serialization.Schema<
    serializers.AppModelsRequestAgentInvoke.Raw,
    SuperAgent.AppModelsRequestAgentInvoke
> = core.serialization.object({
    input: core.serialization.string(),
    sessionId: core.serialization.string().optional(),
    enableStreaming: core.serialization.boolean(),
});

export declare namespace AppModelsRequestAgentInvoke {
    interface Raw {
        input: string;
        sessionId?: string | null;
        enableStreaming: boolean;
    }
}
