function TreeNode({ node }) {
    return (
        <div>
            <p className="p-1 text-sm font-bold mb-1">{node.node}</p>
            {
                (node.literals.length > 0)
                    ?   <div className="p-1 text-xs rounded bg-warning">
                            {
                                node.literals.map((val, idx) => <p key={idx}>{val[0]}: {val[1]}</p>)
                            }
                        </div> : ""
            }

        </div>
    )
}

export default TreeNode
