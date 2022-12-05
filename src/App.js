import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResultBox from "./components/ResultBox";
import TextBox from "./components/TextBox";
import json_examples from "./utils/default_example";

function App() {
	const height = "calc(100vh - 112px)";
	const [json, setJson] = useState(json_examples[0]);

	return (
		<div>
			<Navbar />
			<div className="columns-2" style={{ "height": height }}>
				<div className="w-full">
					<TextBox height={height} json={json} setJson={setJson} />
				</div>
				<div className="w-full">
					<ResultBox height={height} json={json} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
