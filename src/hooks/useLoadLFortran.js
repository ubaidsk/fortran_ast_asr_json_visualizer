import { useState, useEffect } from "react";

import { useExternalScript } from "./useExternalScript";

export const useLoadLFortran = (url) => {
    const [lfortran, setLfortran] = useState({
        "emit_ast_json_from_source": (src) => console.log("I am not loaded"),
        "emit_asr_json_from_source": (src) => console.log("I am not loaded"),
        "isReady": false
    });

    const moduleState = useExternalScript(url);

    useEffect(() => {
        if (moduleState === "ready") {
            // eslint-disable-next-line no-undef
            const mod = Module;
            mod.onRuntimeInitialized = () => {
                setLfortran({
                    "emit_ast_json_from_source": mod.cwrap("emit_ast_json_from_source", "string", ["string"]),
                    "emit_asr_json_from_source": mod.cwrap("emit_asr_json_from_source", "string", ["string"]),
                    "isReady": true,
                });
            }
        }

        return () => {
            // second
        }
    }, [moduleState])

    return lfortran;
}
