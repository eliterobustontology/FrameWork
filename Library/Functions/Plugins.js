const VIBRATION=(TIME)=>{Android.vibrate(TIME||100);};
const BATTERY=(callback)=>{var battery = Android.getBatteryPercentage();callback(battery);};
const CAMERA=(IMAGE,callback)=>{function onCameraCaptured(uri) {IMAGE.src=uri;callback(uri)}onCameraCaptured();};
const VIDEO=(VID,callback)=>{function onCameraCaptured(uri) {VID.src=uri;callback(uri)}onCameraCaptured();};
const FILE=(PATH,callback)=>{function onFilePicked(fileUri) {PATH.src=fileUri;callback(fileUri);};onFilePicked();};
const AUDIO=(AUD,callback)=>{function onAudioRecorded(uri) {AUD.src=uri;callback(uri);};onAudioRecorded();};
const DOWNFILE=(LINK,NAMES)=>{Android.downloadFile(LINK, NAMES);}
const NOTIFICATIONS=(TITLE,MESS)=>{Android.showNotification(TITLE, MESS);};
const PHONE=(CODE)=>{Android.runUSSD(CODE);};
const RESTART=()=>{ Android.reloadApp();};