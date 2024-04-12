import { ConnectionProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import React from "react";
import EditorCanvas from "./_components/editor-canvas";

type Props = {};

const Page = (props: Props) => {
    return (
        <EditorProvider>
            <ConnectionProvider>
                <EditorCanvas />
            </ConnectionProvider>
        </EditorProvider>
    );
};

export default Page;
