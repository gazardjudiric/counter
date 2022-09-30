import React, { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    const [valeur, setValeur] = useState("");
    const [historique, setHistorique] = useState([]);

    const makeMoinHistorique = () => {
        setCount(valeur === "" ? count - 1 : valeur - count)
        const copieHistorique = [...historique]
        copieHistorique.push(valeur + " - " + count + " = " + (valeur - count))
        setHistorique(copieHistorique)
    }
    const makePlusHistorique = () => {
        setCount(valeur === "" ? count + 1 : valeur + count)
        const copieHistorique = [...historique]
        copieHistorique.push(valeur === "" ? count : + " + " + count + " = "+ (valeur + count))
        setHistorique(copieHistorique)
    }
    return (
        <div className="barnCard">
            <div className="card">
                <h1>Counter and Operation</h1>
                <div className="cardContent">
                    <input type="number" value={valeur} onChange={(event) => setValeur(parseInt(event.target.value))}/>
                    <div className="CardButtons">
                        <button onClick={makeMoinHistorique}>-</button>
                        <span>{count}</span>
                        <button onClick={makePlusHistorique}>+</button>
                    </div>
                </div>
            </div>
            <div className="cardHistorique">
                <h2>Historiques</h2>
                <div className="displayHistorique">
                    {historique.map( (calcul) => {
                        return (
                            <>
                            {calcul} <br />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Count;