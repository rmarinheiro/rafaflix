import React from 'react';

function ButtonLink(props){
    console.log(props);
    //props =>{ className:"o que vai passar" , href="/"}
    return(    
            <a className={props.className} href={props.href}>
                 {props.children}
            </a>
    ); 
}

export default ButtonLink;