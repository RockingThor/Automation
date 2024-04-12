import { ConnectionProviderProps } from "@/providers/connections-provider";
import { z } from "zod";

export const EditUserProfileSchema = z.object({
    email: z.string().email("Required"),
    name: z.string().min(1, "Required"),
});

export const WorkFlowFormSchema = z.object({
    name: z.string().min(1, "Required"),
    description: z.string().min(1, "Required"),
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

export type EditorCanvasType =
    | "Email"
    | "Condition"
    | "AI"
    | "Slack"
    | "Google Drive"
    | "Notion"
    | "Discord"
    | "Custom Webhook"
    | "Google Calender"
    | "Trigger"
    | "Action"
    | "Wait"
    | "Google Calendar";

export type EditorCanvasCardType = {
    title: string;
    description: string;
    completed: boolean;
    current: boolean;
    metadata: any;
    type: EditorCanvasType;
};

export type EditorNodeType = {
    id: string;
    type: EditorCanvasCardType["type"];
    position: {
        x: number;
        y: number;
    };
    data: EditorCanvasCardType;
};

export type EditorNode = EditorNodeType;

export type EditorActions =
    | {
          type: "LOAD_DATA";
          payload: {
              elements: EditorNode[];
              edges: {
                  id: string;
                  source: string;
                  target: string;
              }[];
          };
      }
    | {
          type: "UPDATE_NODE";
          payload: {
              elements: EditorNode[];
          };
      }
    | { type: "REDO" }
    | { type: "UNDO" }
    | {
          type: "SELECTED_ELEMENT";
          payload: {
              element: EditorNode;
          };
      };
