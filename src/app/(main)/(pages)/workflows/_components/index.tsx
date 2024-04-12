import React from "react";
import { WorkflowCard } from "./workflow";

type Props = {};

const WorkFlow = (props: Props) => {
    return (
        <div className="flex flex-col gap-4 p-6">
            <section className="flex flex-col gap-4 p-6">
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
