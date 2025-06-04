const NOVASTART=()=>{

    APPMODE('#333333');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <h1>Under Development</h1>

        <footer>

            <div class='IconHolderDiv'>

                <img class='Icon' src='${WHITEFOLDERICON}'/>

                <p>Section</p>

            </div>

            <div class='IconHolderDiv'>

                <img class='Icon' src='${WHITESHOPPINGCART}'/>

                <p>Shop</p>

            </div>

            <div class='IconHolderDiv'>

                <img class='Icon' src='${WHITESAVEDICON}'/>

                <p>Saved</p>

            </div>

            <div class='IconHolderDiv'>

                <img class='Icon' src='${WHITEUSERPROFILEICON}'/>

                <p>Account</p>

            </div>

        </footer>
        
    `);

};