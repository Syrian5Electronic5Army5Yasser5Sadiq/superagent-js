/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AppModelsRequestAgent: core.serialization.ObjectSchema<
    serializers.AppModelsRequestAgent.Raw,
    SuperAgent.AppModelsRequestAgent
> = core.serialization.object({
    isActive: core.serialization.boolean().optional(),
    name: core.serialization.string(),
    initialMessage: core.serialization.string().optional(),
    prompt: core.serialization.string().optional(),
    llmModel: core.serialization.string(),
    description: core.serialization.string(),
    avatar: core.serialization.string().optional(),
});

export declare namespace AppModelsRequestAgent {
    interface Raw {
        isActive?: boolean | null;
        name: string;
        initialMessage?: string | null;
        prompt?: string | null;
        llmModel: string;
        description: string;
        avatar?: string | null;
    }
}
