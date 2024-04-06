import { CONNECTIONS } from "@/lib/constants";
import React from "react";
import ConnectionCard from "./_components/connection-card";
import { title } from "process";

type Props = {
    searchParams?: {
        [key: string]: string | undefined;
    };
};

const Connections = (props: Props) => {
    return (
        <div className="relative flex flex-col gap-4">
            <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
                Connections
            </h1>
            <div className="relative flex flex-col gap-4">
                <section className="flex flex-col gap-4 p-6 text-muted-foreground">
                    Connect all your apps from here. You may need to connect or
                    configure permissions regaularly to have a smooth experience
                    while using the services.
                    {CONNECTIONS.map((connection) => (
                        <ConnectionCard
                            key={connection.title}
                            title={connection.title}
                            description={connection.description}
                            icon={connection.image}
                            type={connection.title}
                            //TODO : Add callback & connected
                            connected={true}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Connections;
