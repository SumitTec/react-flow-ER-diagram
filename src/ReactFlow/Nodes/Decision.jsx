import React, { Fragment } from "react";
import { Handle, Position } from "reactflow";

function Decision() {
    return (
        <Fragment>

            <div className="decision-heigh">

                <div className="rhombus-1">
                    <p> Decision Making </p>
                </div>

            </div>

            <Handle
                type="source"
                id="1"
                position={Position.Bottom}
            />
            
            <Handle
                type="target"
                id="right"
                position={Position.Right}
            />

        </Fragment>
    );
}

export default Decision;
