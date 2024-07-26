import React, { Fragment } from "react";
import { Handle, Position } from "reactflow";

function InputOutput() {
    return (
        <Fragment>

            <div className="">
                <div className="parallelogram"> Input /  Output Section</div>
            </div>

            <Handle
                type="source"
                id="i0-1"
                position={Position.Left}
            />

            <Handle
                type="target"
                id="io-2"
                position={Position.Right}
            />

        </Fragment>
    );
}

export default InputOutput;
