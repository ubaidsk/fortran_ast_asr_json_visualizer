import { useState } from "react";

import ResultBox from "../components/ResultBox";
import TextBoxJson from "../components/TextBoxJson";
import json_examples from "../utils/default_example_json";

function JsonExplorer() {
	const height = "calc(100vh - 112px)";
	const [json, setJson] = useState(json_examples[0]);

	return (
        <div className="columns-2" style={{ "height": height }}>
            <div className="w-full">
                <TextBoxJson height={height} json={json} setJson={setJson} />
            </div>
            <div className="w-full">
                <ResultBox height={height} json={json} />
            </div>
        </div>
	);
}

export default JsonExplorer;
