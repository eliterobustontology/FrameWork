const URL='https://docs.google.com/spreadsheets/d/1x_Nruw60vwcWJKkMUWpNncGzQSoPgHoMP2X8so3eS8I/edit?usp=sharing';

const NOVASTART=()=>{
    
    VISITOR(URL,'Users');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header>

            <div id='HeaderHolder' class='TopNav'>

                <img id='Logo' class='LeftIcon' src='https://ashshakurcharity.org/Assets/logo.jpg'/>
        
                <h1 class='CompanyName'>Ash Shakur Charity and Orphanage Aid</h1>

                <p class='Motto'>"Helping the poor orphans and the needy people"</p>

                <img class='RightIcon' src='${WHITEMENUICON}'/>

            </div>

            <div id='DonateSection' class='TopNav'>

                <h1>Donate</h1>
            
            </div>

        </header>

        <div class=''>
        
        </div>

    `);

};