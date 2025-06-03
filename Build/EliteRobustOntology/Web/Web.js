const NOVASTART=()=>{

    APPMODE('#333333')

    ROUTE('',HOMEPAGE,HOMEPAGE);

};

const HOMEPAGE=()=>{

    DISPLAY('',`
        
        <header>

            <img class='LeftIcon' src='https://eroinnovations.github.io/FrameWork/Library/Assets/Images/Posts/Elite/CompanyLogo.png'/>

            <p>Elite Robust Ontology</p>

            <img class='RightIcon' src='${WHITEMENUICON}'/>
        
        </header>
        
    `);

};