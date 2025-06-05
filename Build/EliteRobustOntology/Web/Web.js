const NOVASTART=()=>{

    APPMODE('#333333');

    ROUTE('',HOMEPAGE,HOMEPAGE);

};

const HOMEPAGE=()=>{

    DISPLAY('',`
        
        <header>

            <img class='LeftIcon' src='https://eroinnovations.github.io/FrameWork/Library/Assets/Images/Posts/Elite/CompanyLogo.png'/>

            <p>Elite Robust Ontology</p>

            <img class='RightIcon' src='${WHITEMENUICON}'/>
        
        </header>

        <div class='HomeDiv'>

            <br>

            <h1>Welcome </h1>

            <br>

            <p class='LeftText'>Elite Robust Ontology is a Cloud Native Based Software Development Company Based in Mbale Uganda.</p>
        
            <br>

            <p class='LeftText'>We Venture in Mobile App Development,Desktop App Development ,Website Development ,System Design and Development ,Web Hosting etc...</p>

            <br>

            <h1>Our Mission</h1>

        </div>
        
    `);

};