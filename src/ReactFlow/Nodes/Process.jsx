import React, { Fragment } from "react";
import { Handle, Position } from "reactflow";

function Process() {
    return (
        <Fragment>

            <div className="">

                <div className="rectangle"> Process Node Status </div>

            </div>

            <Handle
                type="source"
                id="1"
                position={Position.Bottom}
            />

        </Fragment>
    );
}

export default Process;
