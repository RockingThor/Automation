import { ConnectionProviderProps } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { Option } from "@/store";
import React from "react";
import { nodeMapper } from "@/lib/types";
import { AccordionContent } from "@radix-ui/react-accordion";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { onContentChange } from "@/lib/editor-utils";

type Props = {
    nodeConnection: ConnectionProviderProps;
    newState: EditorState;
    file: any;
    setFile: (file: any) => void;
    selectedSlackChannels: Option[];
    setSelectedSlackChannels: (channels: Option[]) => void;
};

const ContentBasedOnTitle = ({
    nodeConnection,
    newState,
    file,
    setFile,
    selectedSlackChannels,
    setSelectedSlackChannels,
}: Props) => {
    const { selectedNode } = newState.editor;
    const title = selectedNode.data.title;
    //@ts-ignore
    const nodeConnectionType: any = nodeConnection[nodeMapper[title]];

    if (!nodeConnectionType) return <p>Not Connected!</p>;

    const isConnected =
        title === "Google Drive"
            ? !nodeConnection.isLoading
            : !!nodeConnectionType[
                  `${
                      title === "Slack"
                          ? "slackAccessToken"
                          : title === "Discord"
                          ? "webhookURL"
                          : title === "Notion"
                          ? "accessToken"
                          : ""
                  }`
              ];

    if (!isConnected) return <p>Not Connected!</p>;

    return (
        <AccordionContent>
            <Card>
                {title === "Discord" && (
                    <CardHeader>
                        <CardTitle>{nodeConnectionType.webhookName}</CardTitle>
                        <CardDescription>
                            {nodeConnectionType.guildName}
                        </CardDescription>
                    </CardHeader>
                )}
                <div className="flex flex-col gap-3 px-6 py-3 pb-20">
                    <p>
                        {title === "Notion" ? "Values to be stored" : "Message"}
                    </p>
                    {title === "Discord" ||
                        (title === "Slack" && (
                            <Input
                                type="text"
                                value={nodeConnectionType.content}
                                onChange={(e) => {
                                    onContentChange(nodeConnection, title, e);
                                }}
                            />
                        ))}
                </div>
            </Card>
        </AccordionContent>
    );
};

export default ContentBasedOnTitle;
