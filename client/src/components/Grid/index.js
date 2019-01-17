import React from "react";

// Exporting the container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
    return <div className={`row{fluid ? "-fluid" : "" }`}>{children}</div>;
}

// This Row copmonent lets us use a bootstap row without having to think about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : "" }`}>{children}</div>
}

// this Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">

export function Col({ size, children }) {
    return (
        <div
        className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
            {children}
        </div>
    );
}