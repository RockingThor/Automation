"use client";
import { Button } from "@/components/ui/button";
import { useNodeConnections } from "@/providers/connections-provider";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import { toast } from "sonner";
import {
    onCreateNodesEdges,
    onFlowPublish,
} from "../_actions/workflow-connections";

type Props = {
    children: React.ReactNode;
    edges: any[];
    nodes: any[];
};

const FlowInstance = ({ children, edges, nodes }: Props) => {
    const pathName = usePathname();
    const [isFlow, setIsFlow] = useState([]);
    const { nodeConnection } = useNodeConnections();

    const onFlowAutomation = useCallback(async () => {
        const flow = await onCreateNodesEdges(
            pathName.split("/").pop()!,
            JSON.stringify(nodes),
            JSON.stringify(edges),
            JSON.stringify(isFlow)
        );
        if (flow) toast.message(flow.message);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nodeConnection]);

    const onPublishWorkflow = useCallback(async () => {
        const res = await onFlowPublish(pathName.split("/").pop()!, true);
        if (res) {
            toast.message(res);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-3 p-4">
                <Button
                    onClick={onFlowAutomation}
                    disabled={isFlow.length < 1}
                >
                    Save
                </Button>
                <Button
                    onClick={onPublishWorkflow}
                    disabled={isFlow.length < 1}
                >
                    Publish
                </Button>
            </div>
        </div>
    );
};

export default FlowInstance;
