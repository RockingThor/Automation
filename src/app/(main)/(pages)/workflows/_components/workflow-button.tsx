"use client";
import WorkflowForm from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
    const { setOpen, setClose } = useModal();
    const handleClick = () => {
        setOpen(
            <CustomModal
                title="Create an Automated Workflow"
                subheading="Make your workflow as powerful as you"
            >
                <WorkflowForm />
            </CustomModal>
        );
    };
    return (
        <Button
            size={"icon"}
            onClick={handleClick}
        >
            <Plus />
        </Button>
    );
};

export default WorkflowButton;
