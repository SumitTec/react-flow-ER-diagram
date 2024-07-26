import React, { Fragment } from "react";
import { Handle, Position } from "reactflow";

function StartEnd() {
    return (
        <Fragment>

            <div className="">
                <div className="btn btn-primary shadow">Start / End Section </div>
            </div>

            <Handle
                type="source"
                id="se-r"
                position={Position.Right}
            />
             <Handle
                type="target"
                id="se-l"
                position={Position.Left}
            />

        </Fragment>
    );
}

export default StartEnd;
