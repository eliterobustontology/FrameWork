const NOVASTART=()=>{

    HOMEPAGEROUTER();

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='MenuHolder'>

            <br>

            <h1>Manager</h1>

            <br>

            <button class='InlineButton'>

                <p class='LeftText' >Home</p>

                <img class='RightIcon' src='${WHITEHOMEICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText' >Projects</p>

                <img class='RightIcon' src='${WHITEFOLDERICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText' >DataBases</p>

                <img class='RightIcon' src='${WHITELIBRARYICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText' >Account</p>

                <img class='RightIcon' src='${WHITEUSERPROFILEICON}'/>
            
            </button>

            <button class='InlineButton'>

                <p class='LeftText' >Settings</p>

                <img class='RightIcon' src='${WHITESETTINGSICON}'/>
            
            </button>

            <footer>

                <p class='LeftText' >Log Out</p>

                <img class='RightIcon' src='${WHITELOGOUTICON}'/>
            
            </footer>

        </div>

        <div class='DataCenter'>

            <br><br>

            <p>Data Space</p>
        
        </div>
        
    `);

};