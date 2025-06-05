const BATTERY=(callback)=>{var batteryStatus = Android.getBatteryStatus();callback(batteryStatus);};
const VIBRATION=(TIME)=>{if (localStorage.getItem('Environment') === 'Production' ) {Android.vibrate(TIME||500);};};
const NOTIFICATION=(TITLE,MESSAGE)=>{Android.showNotification(TITLE,MESSAGE);};
const SYSTEMSTATE=(COLOR)=>{if (localStorage.getItem('Environment') === 'Production' ) {Android.setSystemBarColor(COLOR, COLOR);}else{console.log('StatusBar and Navigation Bar Changed Color');};};