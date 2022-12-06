import { useState, useEffect } from "react";
import { useLoadLFortran } from "./hooks/useLoadLFortran";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OutputBox from "./components/OutputBox";
import TextBox from "./components/TextBox";
import code_examples from "./utils/defaultExamples";
import generateGraph from "./utils/graphGenerator";

const lfortranProgress = <progress className="progress w-1/2 relative top-1/2 left-1/2" style={{ transform: "translate(-50%, -50%)" }}></progress>;

function App() {
	const height = "calc(100vh - 112px)";
	const [srcCode, setSrcCode] = useState(code_examples[0]);
	const lfortran = useLoadLFortran("/ast_asr_json_visualizer/lfortran.js");
	const [output, setOutput] = useState(lfortranProgress);

	useEffect(() => {
		if (lfortran.isReady) {
			const out = lfortran.emit_ast_json_from_source(code_examples[0]);
			setOutput(<pre className="overflow-scroll h-full">{out}</pre>);
		}
	}, [lfortran])

	function outputHandler(option) {
		let out = "";
		if (option.tree === "AST") {
			out = lfortran.emit_ast_json_from_source(srcCode);
		} else {
			out = lfortran.emit_asr_json_from_source(srcCode);
		}

		if (option.variant === "JSON") {
			setOutput(<pre className="overflow-scroll h-full">{out}</pre>);
			return;
		}

		setOutput(generateGraph(out));
	}

	return (
		<div>
			<Navbar />
			<div className="columns-2" style={{ height: height }}>
				<div className="w-full h-full">
					<TextBox height={height} srcCode={srcCode} setSrcCode={setSrcCode} outputHandler={outputHandler} />
				</div>
				<div className="w-full h-full">
					<OutputBox height={height} output={output} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
