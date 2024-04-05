import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
    return (
        <div className="flex overflow-hidden h-screen items-center  justify-center">
            {props.children}
        </div>
    );
};

export default Layout;
