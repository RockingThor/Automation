import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    name: string;
    description: string;
    id: string;
    publish: boolean | null;
};

export const WorkflowCard = ({ name, description, id, publish }: Props) => {
    //TODO: Add publish
    return (
        <Card className="flex w-full items-center justify-between">
            <CardHeader className="flex flex-col gap-4">
                <Link href={`/workflows/editor/${id}`}>
                    <div className="flex flex-row gap-2">
                        <Image
                            src={`/googleDrive.png`}
                            alt="Google Drive"
                            height={30}
                            width={30}
                            className="object-contain"
                        />
                        <Image
                            src={`/notion.png`}
                            alt="Notion"
                            height={30}
                            width={30}
                            className="object-contain"
                        />
                        <Image
                            src={`/discord.png`}
                            alt="Discord"
                            height={30}
                            width={30}
                            className="object-contain"
                        />
                    </div>
                    <div className="">
                        <CardTitle className="text-lg">{name}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </Link>
            </CardHeader>
        </Card>
    );
};
