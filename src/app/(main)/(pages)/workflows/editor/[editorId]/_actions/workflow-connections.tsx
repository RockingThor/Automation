"use server";

import { db } from "@/lib/db";

export const onCreateNodesEdges = async (
    flowId: string,
    nodes: string,
    edges: string,
    flowPath: string
) => {
    const flow = await db.workflows.update({
        where: {
            id: flowId,
        },
        data: {
            nodes,
            edges,
            flowPath,
        },
    });
    if (flow) {
        return { message: "Flow saved" };
    }
};

export const onFlowPublish = async (workflowId: string, state: boolean) => {
    //console.log(state);
    const res = await db.workflows.update({
        where: {
            id: workflowId,
        },
        data: {
            publish: state,
        },
    });
    if (res.publish) return "Workflow is now published";
    return "Some error occured while publishing workflow";
};
