import dagre from 'dagre';

import TreeNode from './TreeNode';
import Visualizer from "./Visualizer";


const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    const nodeWidth = 180;

    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: node.nodeHeight });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = isHorizontal ? 'left' : 'top';
        node.sourcePosition = isHorizontal ? 'right' : 'bottom';
        // Shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - node.nodeHeight / 2,
        };

        return node;
    });

    return [nodes, edges];
};

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.idx = 1;
        return this;
    }

    createNode(cur_node) {
        cur_node.idx = this.idx++;
        cur_node.literals = [];
        let obj = cur_node.fields;
        for (let prop in obj) {
            let neigh = obj[prop];
            if (typeof neigh === 'object') {
                if (neigh.hasOwnProperty("node")) {
                    this.createEdge(cur_node.idx, neigh, prop, prop);
                } else {
                    if (neigh.length > 0) {
                        for (let i in neigh) {
                            let arrayElement = neigh[i];
                            if (typeof arrayElement === 'object') {
                                if (arrayElement.hasOwnProperty("node")) {
                                    this.createEdge(cur_node.idx, arrayElement, prop, `${prop}[${i}]`);
                                } else {
                                    console.log("ERROR: Unexpected 2D Array found");
                                }
                            } else {
                                cur_node.literals.push([`${prop}[${i}]`, `${arrayElement}`]);
                            }
                        }
                    } else {
                        // 0 length array, show as literal
                        cur_node.literals.push([prop, "[]"]);
                    }
                }
            } else {
                cur_node.literals.push([prop, `${neigh}`]);
            }
        }

        this.nodes.push({ id: `${cur_node.idx}`, data: { label: <TreeNode node={cur_node} /> }, nodeHeight: 70 + 20 * (cur_node.literals.length) });
    }

    createEdge(parent_idx, cur_node, edge_src, edge_label) {
        this.edges.push({
            id: `${parent_idx}-${this.idx}`,
            source: `${parent_idx}`,
            target: `${this.idx}`,
            type: 'custom',
            sourceHandler: edge_src,
            data: { text: edge_label },
        });
        this.createNode(cur_node);
    }
}



function ResultBox({ height, json }) {
    var g = new Graph();
    g.createNode(json);
    var [layoutedNodes, layoutedEdges] = getLayoutedElements(g.nodes, g.edges);

    return (
        <div className="w-full bg-base-200" style={{ height: height }}>
            {/* <button
                className='btn mt-2 ml-4 absolute z-10 text-xl'
                onClick={() => { setNodes(initialNodes); setEdges(initialEdges) }}
            >
                <i className="ri-restart-line"></i>
            </button> */}
            <Visualizer initialNodes={layoutedNodes} initialEdges={layoutedEdges} />
        </div>
    );
}

export default ResultBox
