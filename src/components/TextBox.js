import code_examples from "../utils/defaultExamples";

function TextBox({ height, srcCode, setSrcCode, outputHandler }) {
	return (
		<div className="grid-rows-2 pl-2 pb-2">
			<div>
				<ul className="menu menu-horizontal p-0">
					<li tabIndex={0}>
						<button className="p-2">
							Examples
							<i className="ri-arrow-drop-down-line text-xl p-0 m-0"></i>
						</button>
						<ul className="p-2 bg-base-100 border-2">
							<li><button onClick={() => setSrcCode(code_examples[0])}>Example1</button></li>
							<li><button onClick={() => setSrcCode(code_examples[1])}>Example2</button></li>
							<li><button onClick={() => setSrcCode(code_examples[2])}>Example3</button></li>
						</ul>
					</li>
					<li tabIndex={1}>
						<button className="p-2">
							Show AST
							<i className="ri-arrow-drop-down-line text-xl p-0 m-0"></i>
						</button>
						<ul className="p-2 bg-base-100 border-2">
							<li><button onClick={() => outputHandler({ tree: "AST", variant: "JSON" })}>Json</button></li>
							<li><button onClick={() => outputHandler({ tree: "AST", variant: "GRAPH" })}>Graph</button></li>
						</ul>
					</li>
					<li tabIndex={2}>
						<button className="p-2">
							Show ASR
							<i className="ri-arrow-drop-down-line text-xl p-0 m-0"></i>
						</button>
						<ul className="p-2 bg-base-100 border-2">
							<li><button onClick={() => outputHandler({ tree: "ASR", variant: "JSON" })}>Json</button></li>
							<li><button onClick={() => outputHandler({ tree: "ASR", variant: "GRAPH" })}>Graph</button></li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="w-full" style={{ height: `calc(${height} - 56px)` }}>
				<textarea className="w-full border-solid border-2 border-sky-500 h-full p-2" value={srcCode} onChange={e => setSrcCode(e.target.value)}></textarea>
			</div>
		</div>
	)
}

export default TextBox
