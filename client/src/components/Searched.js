import React from "react";
import { Link } from "react-router-dom";

function Searched() {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Book Title" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                </div>
           </input>
           </div>
            )
        };
        
export default Searched;