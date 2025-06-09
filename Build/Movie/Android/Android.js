const NOVASTART=()=>{

    ACCOUNTCHECKER(HOMEPAGEROUTER(),'',LOGINPAGEROUTER());

};

const HOMEPAGEROUTER=()=>{

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const LOGINPAGEROUTER=()=>{

    ROUTE('',LOGINPAGE,'LOGINPAGE');

};

const LOGINPAGE=()=>{

    DISPLAY('',`

        <br><br>
        <h1 class='AppName'>Movifiy</h1>
        <br>
        <p>Watch.Save.Share</p>
        <br>
        <h3>Login to Watch</h3>
        <br>
        <input class='RoundInput' type='email' placeholder='UserEmail'/>
        <input class='RoundInput' type='password' placeholder='*********'/>
        <button class='LoginButton'>LogIn</button>
        <br><br
        <h1>OR</h1>
        <br><br>
        <div id='OptionsHolder' class='TopNav'>
           <button class='OptionButtons'>Reset Password</button>
           <button onclick='CREATEACCOUNTPAGEROUTER()' class='OptionButtons'>Create Account</button>   
        </div>
        
    `);

};

const CREATEACCOUNTPAGEROUTER=()=>{

    ROUTE(' ',CREATEACCOUNTPAGE,'LOGINPAGE');

};

const CREATEACCOUNTPAGE=()=>{

    DISPLAY('',`

        <br><br>
        <h1 class='AppName'>Movifiy</h1>
        <br>
        <p>Watch.Save.Share</p>
        <br>
        <h3>Create to Watch</h3>
        <br>
        <input class='RoundInput' type='text' placeholder='UserName'/>
        <input class='RoundInput' type='email' placeholder='UserEmail'/>
        <input class='RoundInput' type='password' placeholder='*********'/>
        <button class='LoginButton'>Create Account</button>
        <br><br
        <h1>OR</h1>
        <br><br>
        <div id='OptionsHolder' class='TopNav'>
           <button class='OptionButtons'>Policies</button>
           <button onclick='LOGINPAGEROUTER()' class='OptionButtons'>Log In</button>   
        </div>
        
    `);

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <footer>
        
        </footer>
        
    `);

}