const API='https://docs.google.com/spreadsheets/d/1x_Nruw60vwcWJKkMUWpNncGzQSoPgHoMP2X8so3eS8I/edit?usp=sharing';

const NOVASTART=()=>{

    DATADOWNLOAD(()=>{

    });

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const DATADOWNLOAD=(Callback)=>{

    DOWNLOADSAVEINDEX(API,"Projects","Projects",()=>{

        Callback();

    });

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <header>

            <h1>ASCO MANAGER</h1>
        
        </header>

        <div class='MenuSection'>

            <button class='MenuButtons' >Create Project</button>

            <button class='MenuButtons' >All Projects</button>

            <button class='MenuButtons' onclick='RELOAD()'>App Sync</button>
        
        </div>

        <div class='DataSection' ></div>
        
    `);

};