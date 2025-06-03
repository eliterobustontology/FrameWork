const URL='https://docs.google.com/spreadsheets/d/1x_Nruw60vwcWJKkMUWpNncGzQSoPgHoMP2X8so3eS8I/edit?usp=sharing';

const NOVASTART=()=>{

    APPMODE('#ffffff');
    
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

                <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEMENUICON}"/>

                <img id='MenuClose' onclick='MENUCLOSE()' class="RightIcon" src="${WHITECLOSEICON}"/>

            </div>

            <div id='DonateSection' class='TopNav'>

                <h1 class='DonateWord'>Donate</h1>
            
            </div>

        </header>

        <div class='ScrollDiv'>

            <div class='TopNav' id='Menu' >

                <p>About Us</p>

                <p onclick='PROJECTPAGEROUTER()'>Our Projects</p>

                <p onclick='CONTACTUSPAGEROUTER()'>Contact Us</p>

            </div>

            <div class='MainImage'>
        
                <img src='https://ashshakurcharity.org/Assets/waterwells/waterwellmain.jpg'/>

                <footer class='MainFooter'>

                    <p class='Message'>Our Prophet Muhammed is reported to have said ,"<b class='SubMessage'>The Best Form of Charity is to give someone water to drink.</b> "</p>
                
                </footer>
        
            </div>

            <br><br>

            <h1>With Regards</h1>

            <br>

            <p class='LeftText'>Ash Shakur Charity and orphanage aid is a nonprofit organization dedicated to transforming lives by addressing the needs of orphans, underprevileged children, and vulnerable communities. With a mission to provide access to water and sanitation, food and clothing, Qurbani and aqeeqa, Ramadan programs, education, healthcareand shelter, we aim to create sustainable solutions that empower individuals and fosterhope.</p>

            <br>

            <p class='LeftText'>Since our inception, we have encouted countless lives through provideing education, supporting healthcare initiatives, and providing safe havns to those in need. Every donation and volunteer efforts brings closer to a word where every child has the opportunity to thrive.</p>

            <br>

            <h1 class='Season'>QURBAN</h1>

            <br>

            <div class='SlideDiv'>

                <img class='QurabanImage'  src='https://ashshakurcharity.org/Assets/Quraban/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>It is neither their meat nor their bolld that reaches Allah but it is piety from you that reaches Him.</p>

            <br><br>

            <h1 class='Season'>HOT MEAL</h1>

            <br>

            <div class='SlideDiv'>

                <img class='QurabanImage' src='https://ashshakurcharity.org/Assets/hotmeal/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>Every Child Deserves a full plate</p>

            <br><br>

            <h1 class='Season'>FOOD PACKS</h1>

            <br>

            <div class='SlideDiv'>

                <img class='QurabanImage' src='https://ashshakurcharity.org/Assets/hotmeal/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>Distributing food packs to combat hunger to the most needy families and vulunerable communities.</p>

            <br><br>

            <h1 class='Season'>MOSQUE CONSTRUCTION</h1>

            <br>

            <div class='SlideDiv'>

                <img class='QurabanImage' src='https://ashshakurcharity.org/Assets/hotmeal/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>Whoever builds a mosque, Allah builds for him/her a house in Paradise.</p>

            <br><br>

            <h1 class='Season'>QURAN DISTRIBUTION</h1>

            <br>

            <div class='SlideDiv'>

                <img class='QurabanImage' src='https://ashshakurcharity.org/Assets/hotmeal/main.jpg'/>
            
            </div>

            <br>

            <p id='QuraBanMessage' class='CenterText'>Distributing food packs to combat hunger to the most needy families and vulunerable communities.</p>

            <br><br>

            <p class='PoweringCompany' onclick='POWERUS()'>Powered by Elite Robust Ontology</p>

            <br>
        
        </div>

    `);

};

const MENUOPEN=()=>{

    var MENU=NAMING('#MenuOpen');

    var MENUCLOSER=NAMING('#MenuClose');

    var MENUDRAWER=NAMING('#Menu');

    CLICK(MENU,()=>{

        STYLED(MENUDRAWER,'display','inline-flex');

        STYLED(MENUCLOSER,'display','block');

        STYLED(MENU,'display','none');

    });

};

const MENUCLOSE=()=>{

    var MENU=NAMING('#MenuOpen');

    var MENUCLOSER=NAMING('#MenuClose');

    var MENUDRAWER=NAMING('#Menu');

    CLICK(MENUCLOSER,()=>{

        STYLED(MENUDRAWER,'display','none');

        STYLED(MENUCLOSER,'display','none');

        STYLED(MENU,'display','block');

    });
 
};

const POWERUS=()=>{

    WEBSITE('https://eroinnovations.site');

};

const CONTACTUSPAGEROUTER=()=>{

    ROUTE(' ',CONTACTUSPAGE,'HOMEPAGE');

};

const CONTACTUSPAGE=()=>{

    DISPLAY('',`

        <header>

            <div id='HeaderHolder' class='TopNav'>

                <img onclick='HOMEPAGEROUTER()' class='LeftIcon' src='${WHITEBACKICON}'/>
        
                <h1 class='CompanyName'>Ash Shakur Charity and Orphanage Aid</h1>

                <p class='Motto'>"Helping the poor orphans and the needy people"</p>

                <img id='MenuOpen' onclick='MENUOPEN()' class="RightIcon" src="${WHITEPHONEICON}"/>

            </div>

            <div id='DonateSection' class='TopNav'>

                <h1 class='DonateWord'>Donate</h1>
            
            </div>

        </header>

        <div class='ScrollDiv'>

            <br>

            <h1>Fill the Form Below</h1>

            <br>

            <input class='RoundInput' placeholder='Enter Your Name'/>

            <input class='RoundInput' placeholder='Enter Your Email'/>

            <textarea placeholder='Compose Your Message'></textarea>

            <button class='SendButton'>Send Message</button>

            <br><br>

            <h3>OR</h3>

            <br>

            <div id='ContactHolder' class='TopNav'>

                <img class='Icon' src='${WHITEINSTAGRAMICON}' onclick='INSTAGRAMUS()' />

                <img class='Icon' src='${WHITEWHATSAPPICON}' onclick='WHATSAPPUS()' />

                <img class='Icon' src='${WHITEFACEBOOKICON}' onclick='FACEBOOKUS()' />

                <img class='Icon' src='${WHITEGMAILICON}' onclick='EMAILUS()'/>
            
            </div>

            <br><br>

            <p class='PoweringCompany' onclick='POWERUS()'>Powered by Elite Robust Ontology</p>

            <br>

        </div>

    `);

};

const CALLUS=()=>{

    CALL('+256705665894');

};

const EMAILUS=()=>{

    GMAIL('ashshakurcharityandorphanageai@gmail.com');

};

const WHATSAPPUS=()=>{

    WEBSITE('https://wa.me/256789467876');

};

const INSTAGRAMUS=()=>{

    WEBSITE('https://www.instagram.com/ash_shakur_charity_?igsh=ZXlrMmNqc3poYTh6');

};

const FACEBOOKUS=()=>{

    WEBSITE('https://www.facebook.com/profile.php?id=100080811854731&mibextid=ZbWKwL');

};