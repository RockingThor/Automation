import { EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

type Props = {};
const initialNodes: EditorNodeType[] = [];
const initialEdges: { id: string; source: string; target: string }[] = [];

const EditorCanvas = (props: Props) => {
    const { dispatch, state } = useEditor();
    return <div>EditorCanvas</div>;
};

export default EditorCanvas;
