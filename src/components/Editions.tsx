import { useState } from "preact/hooks";
import Galeria from "./Galeria";
import editions from "@/data/editions-info.json"

export default function Editions({i18n}:{i18n:any}) {
    const [edicion, setEdicion] = useState("1")

    return (
        <>
          <Galeria i18n={i18n} edicion={edicion} />
        </>
    )
}