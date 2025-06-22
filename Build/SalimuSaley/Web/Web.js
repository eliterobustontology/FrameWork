const NOVASTART=()=>{

    ROUTE("",HOMEPAGE,HOMEPAGE);

};

const HOMEPAGEROUTER=()=>{

    ROUTE("",HOMEPAGE,HOMEPAGE);

};

const HOMEPAGE=()=>{

    DISPLAY("",`

        <header class="AppHeader" >

            <h1 class="TopCompanyName">SSMCO</h1>

            <p class="CompanyName">Salimu Saley Muslim Charity Organisation</p>
        
            <header class="SubAppHeader">

                <h1 class="Menusections" onclick="ABOUTUSPAGEROUTER()">About</h1>

                <h1 class="Menusections" onclick="SERVICESPAGEPAGEROUTER()">Services</h1>

                <h1 class="Menusections" onclick="CONTACTUSPAGEROUTER()">Contact</h1>
            
            </header>

        </header>

        <div  class="HeaderDiv"></div>
        
    `);

};

const ABOUTUSPAGEROUTER=()=>{

    ROUTE(" ",ABOUTUSPAGE,HOMEPAGE);

};

const ABOUTUSPAGE=()=>{

    DISPLAY("",`

        <header class="AppHeader" >

            <h1 class="TopCompanyName">SSMCO</h1>

            <p class="CompanyName">Salimu Saley Muslim Charity Organisation</p>
        
            <header class="SubAppHeader">

                <img onclick="HOMEPAGEROUTER()" class="LeftIcon" src="${WHITEBACKICON}"/>
                
                <h1 id="SectionText" class="RightText" >About Us</h1>
            
            </header>

        </header>

        <div  class="HeaderDiv"></div>
        
    `);

};

const SERVICESPAGEPAGEROUTER=()=>{

    ROUTE(" ",SERVICESPAGE,HOMEPAGE);

};

const SERVICESPAGE=()=>{

    DISPLAY("",`

        <header class="AppHeader" >

            <h1 class="TopCompanyName">SSMCO</h1>

            <p class="CompanyName">Salimu Saley Muslim Charity Organisation</p>
        
            <header class="SubAppHeader">

                <img onclick="HOMEPAGEROUTER()" class="LeftIcon" src="${WHITEBACKICON}"/>
                
                <h1 id="SectionText" class="RightText" >Our Services</h1>
            
            </header>

        </header>

        <div  class="HeaderDiv"></div>
        
    `);

};

const CONTACTUSPAGEROUTER=()=>{

    ROUTE(" ",CONTACTUSPAGE,HOMEPAGE);

};

const CONTACTUSPAGE=()=>{

    DISPLAY("",`

        <header class="AppHeader" >

            <h1 class="TopCompanyName">SSMCO</h1>

            <p class="CompanyName">Salimu Saley Muslim Charity Organisation</p>
        
            <header class="SubAppHeader">

                <img onclick="HOMEPAGEROUTER()" class="LeftIcon" src="${WHITEBACKICON}"/>
                
                <h1 id="SectionText" class="RightText" >Contact Us</h1>
            
            </header>

        </header>

        <div  class="HeaderDiv"></div>
        
    `);

};