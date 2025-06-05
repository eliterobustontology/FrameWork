const NOVASTART=()=>{

    APPMODE('#333333')

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeScroll'>

            <input class='RoundInput' type='Seaarch' placeholder='Search For Item'/>
        
        </div>

        <footer>

            <div class='IconHolderDiv' onclick='SECTIONPAGEROUTER()'>

                <img class='Icon' src='${WHITEFOLDERICON}'/>

                <p>Section</p>

            </div>

            <div class='IconHolderDiv' onclick='SHOPPAGEROUTER()'>

                <img class='Icon' src='${WHITESHOPPINGCART}'/>

                <p>Shop</p>

            </div>

            <div class='IconHolderDiv' onclick='SAVEDPAGEROUTER()'>

                <img class='Icon' src='${WHITESAVEDICON}'/>

                <p>Saved</p>

            </div>

            <div class='IconHolderDiv' onclick='USERACCOUNTPAGEROUTER()'>

                <img class='Icon' src='${WHITEUSERPROFILEICON}'/>

                <p>Account</p>

            </div>

        </footer>
        
    `);

};

const SECTIONPAGEROUTER=()=>{

    ROUTE(' ',SECTIONPAGE,'HOMEPAGE');

};

const SECTIONPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='LeftIcon' src='${WHITESINGLEBACKICON}' onclick='HOMEPAGEROUTER()'/>
        
            <p class='RightText' >Sections</p>

        </header>

    `);

};

const SHOPPAGEROUTER=()=>{

    ROUTE(' ',SHOPPAGE,'HOMEPAGE');

};

const SHOPPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='LeftIcon' src='${WHITESINGLEBACKICON}' onclick='HOMEPAGEROUTER()'/>
        
            <p class='RightText' >Shop</p>

        </header>

    `);

};

const SAVEDPAGEROUTER=()=>{

    ROUTE(' ',SAVEDPAGE,'HOMEPAGE');

};

const SAVEDPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='LeftIcon' src='${WHITESINGLEBACKICON}' onclick='HOMEPAGEROUTER()'/>
        
            <p class='RightText' >Saved</p>

        </header>

    `);

};

const USERACCOUNTPAGEROUTER=()=>{

    ROUTE(' ',USERACCOUNTPAGE,'HOMEPAGE');

};

const USERACCOUNTPAGE=()=>{

    DISPLAY('',`

        <header>

            <img class='LeftIcon' src='${WHITESINGLEBACKICON}' onclick='HOMEPAGEROUTER()'/>
        
            <p class='RightText' >User Account</p>

        </header>

    `);

};