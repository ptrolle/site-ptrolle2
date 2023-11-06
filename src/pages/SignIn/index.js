import React from "react";

import { Link } from "react-router-dom";

function SignIn(){
    return(
        <div>
            <p>Pagina SignIn</p>
            <Link className="btnHome" to="/home"><button> Go to page Home</button></Link>
        </div>
    );
}

export default SignIn;