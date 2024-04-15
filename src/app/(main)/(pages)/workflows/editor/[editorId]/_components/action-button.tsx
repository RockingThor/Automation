import { Option } from "@/components/ui/multiple-selector";
import { ConnectionProviderProps } from "@/providers/connections-provider";
import React from "react";

type Props = {
    currentService: string;
    nodeConnection: ConnectionProviderProps;
    channels: Option[];
    setChannels: (channels: Option[]) => void;
};

const ActionButton = ({
    currentService,
    nodeConnection,
    channels,
    setChannels,
}: Props) => {
    return <div>ActionButton</div>;
};

export default ActionButton;
