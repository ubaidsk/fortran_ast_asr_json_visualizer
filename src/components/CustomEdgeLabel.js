import { getBezierPath, EdgeLabelRenderer } from 'reactflow';

const CustomEdgeLabel = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    data,
}) => {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    return (
        <>
            <path id={id} className="react-flow__edge-path" d={edgePath} />

            <EdgeLabelRenderer>
                <div
                    style={{
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    }}
                    className="nodrag nopan p-2 text-xs font-bold rounded bg-warning absolute"
                >
                    {data.text}
                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default CustomEdgeLabel;
