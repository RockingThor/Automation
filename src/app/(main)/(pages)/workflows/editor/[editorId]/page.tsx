import EditorProvider from "@/providers/editor-provider";
import React from "react";

type Props = {};

const Page = (props: Props) => {
    return (
        <EditorProvider>
            <div className=""></div>
        </EditorProvider>
    );
};

export default Page;
