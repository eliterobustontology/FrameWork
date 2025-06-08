const APPLOGO='https://eroinnovations.github.io/FrameWork/Library/Assets/Images/Posts/Elite/CompanyLogo.png';

const API='https://docs.google.com/spreadsheets/d/1QrPMVra0WEB1L_JWpZyvm1WRoVaSlJk7KFiJiCOgYOQ/edit?usp=sharing';

const NOVASTART=()=>{

    BODY();

    APPMODE('#333333');

    ROUTE('',HOMEPAGE,HOMEPAGE);

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='RelativeDiv'>

            <img class='AppLogo' src='${APPLOGO}'/>

            <div class='TopNav'>

                <p>About Us</p>

                <p onclick='DEVELOPERPAGEROUTR()'>Developers</p>

                <p>Contact Us</p>
            
            </div>

            <h1>Welcome</h1>

            <br>

            <p class='LeftText'>Elite Robust Ontology is a Cloud Native Based Company Located In Mbale and We Venture in <b>Mobile App Development</b>,<b>Desktop Software Development</b>,<b>Website Development</b> and <b>System Design and Development</b>.</p>

            <br>

            <p class='LeftText'>Elite Robust Ontology has Ventured in Many Projects and Parthered with many Companies to Digitilise there Business and Enterprises and here is a list of Parther Companies that we Power with Various Solutions.</p>

            <br>

            <h1>Our Parthners</h1>

            <br>

            <div class='ParthnersDiv'>

                <p>...Please Wait...</p>
        
            </div>

        </div>
        
    `);

    const ParthnersDiv=NAMING('.ParthnersDiv');

    GETDATA(API,'Parthers',(data)=>{

        DISPLAY(ParthnersDiv,'');

        REDUX(data,(element)=>{

            console.log(element);

            CREATEELEMENT(ParthnersDiv,'div','ParthnerMiniDivs',(ELEMENT)=>{

                DISPLAY(ELEMENT,`

                    <img src='${element.Logo||APPLOGO}'/>

                    <footer class='ParthnerFooter'>
                    
                        <p>${element.Name}</p>

                    </footer>
                    
                `);

                CLICK(ELEMENT,()=>{

                    WEBSITE(element.Link);

                });

            });

        });

    },(data)=>{

        console.log(data);

    });

};

const DEVELOPERPAGEROUTR=()=>{

    ROUTE(' ',DEVELOPERPAGE,'HOMEPAGE');

};

const DEVELOPERPAGE=()=>{

    DISPLAY('',`

        <header>

            <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
            <p class='RightText'>Developers</p>

        </header>

        <div id='SectionDiv' class='RelativeDiv'>

            <br>

            <h1>Welcome Developer</h1>

            <br>

            <p class='LeftText'>Elite Robust Ontology also wants to help Developers focus on there craft thus we developed Plugins to Speed up your Work and Even allow developers to use our services thus enable Progress in cloud native technology.
            <br><br>
            Please readmore about our products and services, we provide to developers and how to install and use them below.</p>

            <div class='TopNav'>

                <p class='ServicesSection'>Elite Store</p>

                <p class='ServicesSection' >Elite Pay</p>

                <p class='ServicesSection'>Elite Frame Work</p>
            
            </div>

            <p>Under Development</p>
        
        </div>
        
    `);

};