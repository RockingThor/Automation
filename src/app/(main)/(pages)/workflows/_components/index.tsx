import React from "react";
import { WorkflowCard } from "./workflow-card";

type Props = {};

const WorkFlow = (props: Props) => {
    return (
        <div className="relative flex flex-col gap-4 ">
            <section className="flex flex-col m-2">
                <WorkflowCard
                    description="Creating a test workflow"
                    id="575858"
                    name="Automate Workflow"
                    publish={false}
                />
            </section>
        </div>
    );
};

export default WorkFlow;
