import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResultBox from "./components/ResultBox";
import TextBox from "./components/TextBox";
import json_examples from "./utils/default_example";

function parseJson(json) {
    try {
        const data = JSON.parse(json);
        return { success: true, data: data };
    } catch (e) {
        console.log(e);
        return { success: false, data: '' };
    }
}

function App() {
	const height = "calc(100vh - 112px)";
	const [json, setJson] = useState(json_examples[0]);
    const parsed_json_info = parseJson(json);

	return (
		<div>
			<Navbar />
			<div className="columns-2" style={{ "height": height }}>
				<div className="w-full">
					<TextBox height={height} json={json} setJson={setJson} />
				</div>
				<div className="w-full">
					{
						parsed_json_info.success ? <ResultBox height={height} json={parsed_json_info.data} />
							: "Could not parse json"
					}
					{/* <ResultBox height={height} json={json} /> */}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
