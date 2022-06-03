import React from 'react'
import "./load.css"

export default function Loading() {
    return (
        <div>

            <div className="loading container">
                <img src="lod.gif" alt="lod.gif" className="img_lod" />
            </div>
            <div>
                <p className="titolo2">
                    carregando...
                </p>
            </div>
        </div>
    )
}
