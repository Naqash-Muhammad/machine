import React from 'react'

const Distraing = () => {

    var game1=["pubs g", "shooter", "haha"];
    var game2=["hello g jnb", "dom pay dom", "gom playe"];

    var mainGame = [...game1, ...game2];

    console.log(mainGame);

    var Name=["Naqash", "Muhammad Ali"];

    const[first, ...last] = Name;
    console.log(first);
    console.log(last);
    return (
        <div>
            
        </div>
    )
}

export default Distraing;
