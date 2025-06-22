const API='https://docs.google.com/spreadsheets/d/15BPlgHpUmm65nUNSLRwlRzaWv1hPenriWVvL5MDcmiw/edit?usp=sharing';

const COMMUNITYRISELOGO='data:image/jpeg;base64,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';

const NOVASTART=()=>{

    APPMODE('Purple');

    VISITOR(API,'Visitors');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

    DOWNLOADSAVEINDEX(API,'News','News',()=>{

        ROUTE('',HOMEPAGE,'HOMEPAGE');

    });

};

const HOMEPAGEROUTE=()=>{

    DOWNLOADSAVEINDEX(API,'News','News',()=>{

    });

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>
        
            <img class='Logo' src='${COMMUNITYRISELOGO}'/>
            
            <div class='TopNav'>
            
                <p onclick='SERVICESPAGEROUTE()'>Services</p>

                <p onclick='ABOUTPAGEROUTE()'>About</p>

                <p onclick='DONATEPAGEROUTE()'>Donate</p>

                <p onclick='CONTACTUSPAGEROUTE()'>Contact</p>
            
            </div>

            <h1>History</h1>

            <p class='BriefIntro'>Community Rise Ventures is a Non Government Funded Organisation that is Responsible and Loves it Community,We Venture in helping the needy and try to resolve community issue without interfering with government projects.</p>
        
            <p class='BriefIntro'>We are Located in Mbale City in Kasanvu ,near Mbale College.</p>

            <h1>Our Projects</h1>

            <p class='BriefIntro'>Community Rise Ventures being a Non Government Funded Organisation and Registered,The Funds that run and act as daily support for our organisation inorder for us to continue to support the community is from your donations and we do wish to show the good hearted people where their donations are being used thus we post the archievements of our organisation and how far they have come to support the community and if you wish to become part of the supporters for a good cause to humanity,please donate to us from the donation section of the site.</p>

            <h3>Our Projects Below</h3>

            <div class='ProjectDIv'></div>

        </div>
    `);

    const ProjectDIv=document.querySelector('.ProjectDIv');

    GETINDEXEDDATA('News','News',(data)=>{

        CREATEELEMENT(ProjectDIv,'div','ProjectedDiv',(ELEMENT)=>{

            DISPLAY(ELEMENT,`

                <img class='ProjectedImage' src='${data.ImageOne}'/>

                <footer class='ProjectedFooter'>

                    <h1 class='ProjectedTitle'>${data.Name}</h1>
                
                </footer>
                
            `);

            CLICK(ELEMENT,()=>{

                JSONIFICATION(data,(MyData)=>{

                    STOREDATA('','MyPosts',MyData);

                    STORYPAGEROUTE();

                });

            });

        });

    });

};

const DONATEPAGEROUTE=()=>{

    ROUTE(' ',DONATEPAGE,'HOMEPAGE');

};

const DONATEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='Logo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopNav'>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

                <h3 class='RightText'>Donate</h3>
            
            </div>

            <h1>FundRaising</h1>

            <p class='BriefIntro'>Community Rise Ventures Being a Non Government Funded Organisation,We There Operate Our Projects Using the Donated Funds Provided by the Donors to keep the Community Projects Running.<br><br> Those interested in being part of a good cause for the needy <br><br> Please donate Using the Account Details Below.</p>

            <h1>Account Details</h1>
            
            <div class='TopNav'>

                <h1 class='LeftText'>Account Number</h1>

                <h1 class='RightText'>60080462400</h1>
            
            </div>

            <div class='TopNav'>

                <h1 class='LeftText'>Bank Name</h1>

                <h1 class='RightText'>Absa</h1>
            
            </div>

            <br><br>

        </div>

    `);

};

const SERVICESPAGEROUTE=()=>{
   
    ROUTE(' ',SERVICESPAGE,'HOMEPAGE');
    
};

const SERVICESPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='Logo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopNav'>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

                <h3 class='RightText'>Services</h3>
            
            </div>

            <p class='BriefIntro'>Community Rise Ventures aids in multiple activities to be able to improve the life of a common person from daily standard to funded projects</p>

            <br>

            <h1>Religious Centers Constructions</h1>

            <p class='BriefIntro'>Community Rise Ventures enables to improve religionous immunity of locals by the  Construction of Mosques and Churchs that is aimed at helping improve the spirtual Life of and strong connection betwwen Man and the Creator thus install discipline to the people of the community.Below is an image of Community Rise Ventures Team Constructing a mosque.</p>

            <img class='Logo'  src='https://th.bing.com/th/id/OIP.ytXiN8ruvK0E_rwZ_68OHgHaEL?w=328&h=185&c=7&r=0&o=5&cb=iwc2&pid=1.7'/>

            <br><br>

            <h1>Safe Water Delivery</h1>

            <p class='BriefIntro'>Community Rise Ventures provides safe Drinking Water to hard to reach areas without safe drinking water and we do this by well constructions and this enables us to prevent and reduces illness in those communities we venture in as shown below</p>


            <img class='Logo' src='https://live.staticflickr.com/7412/27493158034_f6139a70c4_b.jpg'/>

            <br><br>

            <h1>Sheltering the Homeless</h1>

            <p class='BriefIntro'>Community Rise Venture also ventures in reducing the rate of homeless and street kids and we do this by construction of orphanages to enable us improve the daily life of a common person.</p>

            <img class='Logo' src=https://th.bing.com/th/id/OIP.ocB3_eXSP4LZmJCrs_JHXQHaDt?cb=iwc2&rs=1&pid=ImgDetMain' />

            <br><br>

            <h1>Feeding the Needy</h1>

            <p class='BriefIntro'>Community Rise Ventures also is trying to solve the issue of starvation by Feeding those who are unable to get daily needs for there daily survival as seen below.</p>

            <img class='Logo' src='https://th.bing.com/th/id/R.f8b5df9bd938e906d4ef8e717e700a7d?rik=TBWioBHpwYl1Rg&pid=ImgRaw&r=0'/>

           <br><br>

            <h1>Cloth the Needy</h1> 

            <p class='BriefIntro'>Community Rise Ventures also provides basic needs for the survivial of those in need as presented below</p>

            <img class='Logo' src='https://www.globalgiving.org/pfil/12617/ph_12617_43123.jpg'/>

            <br><br>

            <h1>Health the Needy</h1> 

            <p class='BriefIntro'>Community Rise Ventures also provides health needs to those who are unable to get them because of unmentioned conditions thus we try our best to make their life simple and comfortable as demonstrated below</p>

            <img class='Logo' src='https://4.bp.blogspot.com/-BggcsQALZ8I/UVQmRuR3ElI/AAAAAAAABcU/8TWrWFTztx8/s1600/Week+29+-+Wheelchairs+056.jpg'/>

        </div>

    `);

};

const ABOUTPAGEROUTE=()=>{
   
    ROUTE(' ',ABOUTPAGE,'HOMEPAGE');
    
};

const ABOUTPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='Logo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopNav'>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

                <h3 class='RightText'>About Us</h3>
            
            </div>

            <h1>Who We are?</h1>

            <p class='BriefIntro'>Community Rise Ventures is a non government Funded Organisation that is aimed at creating Smiles on the Faces of the Community we venture to help those in need by creating long term solutions without interfering in government projects and we venture in service delivery as shown in services section of this site.</p>


            <h1>Where are We?</h1>

            <p class='BriefIntro'>We are located in kasanvu in Mbale City near Mbale College.</p>

            <h1>Our Mission</h1>

            <p class='BriefIntro'>Our Mission is to Create a smile on everyones face who is inndeed needy by solving the challenges with the aid of those willing to support.</p>

            <br><br>

        </div>

    `);

};

const CONTACTUSPAGEROUTE=()=>{
   
    ROUTE(' ',CONTACTPAGE,'HOMEPAGE');
    
};

const CONTACTPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <img class='Logo' src='${COMMUNITYRISELOGO}'/>

            <div class='TopNav'>

                <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>

                <h3 class='RightText'>Contact Us</h3>
            
            </div>

            <h3>Reach Us Today</h3>

            <button onclick='INSTAGRAMED()'>Instagram</button>

            <button onclick='WHATED()'>WhatsApp</button>

            <button onclick='FACED()'>Facebook</button>

            <button onclick='TIK()'>TikTok</button>

            <button onclick='EMAILED()' >Email</button>

            <button onclick='ED()' >X</button>

            <h1>Tech Support</h1>

            <button onclick='WEBSITED()'>Site</button>

            <br><br>

            <p>Powered By Elite Robust Ontology.</p>

            <br><br>

        </div>

    `);
};

const WEBSITED=()=>{

    WEBSITE('https://eroinnovations.site');

};

const INSTAGRAMED=()=>{

    INSTAGRAM('community_rise_ventures');

};

const WHATED=()=>{
    WHATSAPP('0779332496');
};

const FACED=()=>{
    WEBSITE('https://www.facebook.com/share/gGoc7h3UY95qyPvU/?mibextid=wwXIfr');
};

const TIK=()=>{
    WEBSITE('https://www.tiktok.com/@communityriseventures?_t=8sJKl4UAph2&_r=1');
};

const ED=()=>{
    WEBSITE('https://x.com/communityriseve?s=11');
};

const EMAILED=()=>{
    GMAIL('Communityriseventures@gmail.com');
}

const STORYPAGEROUTE=()=>{
   
    ROUTE(' ',STORYPAGE,'HOMEPAGE');
    
};

const STORYPAGE=()=>{

    SESSIONDEJSONDATA('MyPosts',(data)=>{

        console.log(data)

        DISPLAY('',`
    
            <div class='HomeDiv'>
    
                <img class='Logo' src='${data.ImageOne}'/>
    
                <div class='TopNav'>
    
                    <img onclick='HOMEPAGEROUTE()' class='LeftIcon' src='${WHITELEFTBACKICON}'/>
    
                    <h3 class='RightText'>${data.Name}</h3>
                
                </div>

                <p class='BriefIntro'>${data.Story}</p>

                <div class='ImagesHolders'>

                    <img class='StoryImage' src='${data.ImageOne||COMMUNITYRISELOGO}'/>

                    <img class='StoryImage'  src='${data.ImageTwo||COMMUNITYRISELOGO}'/>

                    <img class='StoryImage' src='${data.ImageThree||COMMUNITYRISELOGO}'/>
                
                </div>

                <br><br>
    
            </div>
    
        `);

    });

};