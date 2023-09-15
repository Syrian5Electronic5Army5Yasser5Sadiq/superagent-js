/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const AgentLlm: core.serialization.Schema<serializers.AgentLlm.Raw, SuperAgent.AgentLlm> =
    core.serialization.object({
        llmId: core.serialization.string(),
    });

export declare namespace AgentLlm {
    interface Raw {
        llmId: string;
    }
}
