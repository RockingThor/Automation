"use client";
import { Connection } from "@/lib/types";
import { useNodeConnections } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { useZeroStore } from "@/store";
import React from "react";

type Props = {
    connection: Connection;
    state: EditorState;
};

const RenderConnectionAccoridon = ({ connection, state }: Props) => {
    const {
        title,
        image,
        description,
        connectionKey,
        accessTokenKey,
        alwaysTrue,
        slackSpecial,
    } = connection;
    const { nodeConnection } = useNodeConnections();
    const { slackChannels, selectedSlackChannels, setSelectedSlackChannels } =
        useZeroStore();
    const connectionData = (nodeConnection as any)[connectionKey];

    const isConnected =
        alwaysTrue ||
        (nodeConnection[connectionKey] &&
            accessTokenKey &&
            connectionData[accessTokenKey]);

    return <div>RenderConnectionAccoridon</div>;
};

export default RenderConnectionAccoridon;
