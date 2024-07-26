import React, { Fragment } from "react";
import { Handle, Position } from "reactflow";

function Delay() {
    return (
        <Fragment>

            <div className="">
                <div className="delay">Delay Section</div>
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

export default Delay;
