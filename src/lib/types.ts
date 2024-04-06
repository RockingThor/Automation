import { ConnectionProviderProps } from "@/providers/connections-provider";
import { z } from "zod";

export const EditUserProfileSchema = z.object({
    email: z.string().email("Required"),
    name: z.string().min(1, "Required"),
});

export type ConnectionsType = "Google Drive" | "Discord" | "Slack" | "Notion";

export type Connection = {
    title: ConnectionsType;
    description: string;
    image: string;
    connectionKey: keyof ConnectionProviderProps;
    accessTokenKey?: string;
    alwaysTrue?: boolean;
    slackSpecial?: boolean;
};
