import { CLOUDCONNECTION } from "../Connection/CloudConnect.js";
import { CONNECTION } from "../Connection/Connection.js"
import { NOVA } from "../Connection/Nova.js";
import { LOADER } from "../Connection/NovaLoader.js";
export const START=()=>{
    NOVA();LOADER();
    if (localStorage.getItem('Environment') === 'Development' ) {
        CONNECTION('../library/Styles/Styles.css','NOVASTYLES');
        CONNECTION('../library/Styles/Classes.css','NOVACLASSES');
        CONNECTION('../library/Styles/Components.css','NOVACOMPONENTS');
        CONNECTION('../library/Functions/Functions.js','FUNCTIONS');
        CONNECTION('../library/Functions/Plugins.js','PLUGINS');
        CONNECTION('../library/Functions/Assets.js','ASSETS');
        CONNECTION('../library/Functions/Connection.js','APIS');
        CONNECTION('../Project/Project.js','PROJECT');
        CONNECTION('../Project/Project.css','PROJECTSTYLES');  
        if (localStorage.getItem('Updates')) {
            console.log('Updates Recieved');
        }else{
            localStorage.setItem('Updates','Approved');
            setTimeout(() => {
                location.reload();
            }, 2000); 
        };
    } else {
        CONNECTION('https://eliterobustontology.github.io/FrameWork/Library/Styles/Styles.css','NOVASTYLES');
        CONNECTION('https://eliterobustontology.github.io/FrameWork/Library/Styles/Classes.css','NOVACLASSES');
        CONNECTION('https://eliterobustontology.github.io/FrameWork/Library/Styles/Components.css','NOVACOMPONENTS');
        CONNECTION('https://eliterobustontology.github.io/FrameWork/Library/Functions/Functions.js','FUNCTIONS');
        CONNECTION('https://eliterobustontology.github.io/FrameWork/Library/Functions/Plugins.js','PLUGINS');
        CONNECTION('https://eliterobustontology.github.io/FrameWork/Library/Functions/Assets.js','ASSETS');
        CONNECTION('https://eliterobustontology.github.io/FrameWork/Library/Functions/Connection.js','APIS');
        CLOUDCONNECTION();   
    };
};
