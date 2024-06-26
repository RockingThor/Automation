import React from "react";
import WorkflowButton from "./_components/workflow-button";
import { useModal } from "@/providers/modal-provider";
import WorkFlow from "./_components";

type Props = {};

const Workflows = (props: Props) => {
    // const { setOpen, setClose } = useModal();
    return (
        <div className="flex flex-col gap-4 relative">
            <h1 className="text-4xl top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
                Workflows
                <WorkflowButton />
            </h1>
            <WorkFlow />
        </div>
    );
};

export default Workflows;
