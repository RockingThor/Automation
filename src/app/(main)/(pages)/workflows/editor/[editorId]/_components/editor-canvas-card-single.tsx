import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useMemo } from "react";
import { useNodeId } from "reactflow";
import EditorCanvasIconHelper from "./editor-canvas-icon-helper";

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
    const { dispatch, state } = useEditor();
    const nodeId = useNodeId();

    const logo = useMemo(() => {
        return <EditorCanvasIconHelper type={data.type} />;
    }, [data]);
    return <div>EditorCanvasCardSingle</div>;
};

export default EditorCanvasCardSingle;
