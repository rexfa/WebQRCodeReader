var canvasPic;
var divLog;
var videoCamera;
function setCanvas(newVideo,newCanvas,newDivLog){
    canvasPic = newCanvas;
    divLog = newDivLog;
    videoCamera = newVideo;
    startCatch();
}

function startCatch(){
     try {
        //动态创建一个canvas元 ，并获取他2Dcontext。如果出现异常则表示不支持
        canvasPic.getContext("2d");
        divLog.innerHTML = "浏览器支持HTML5 CANVAS";
    }
    catch (e) {
         alert("浏览器不支持HTML5 CANVAS");
         divLog.innerHTML = "浏览器不支持HTML5 CANVAS";
    }
    //这段代 主要是获取摄像头的视频流并显示在Video 签中 
    window.addEventListener("DOMContentLoaded", AddListenerForOpenCamera(canvasPic,videoCamera), false);
}
function AddListenerForOpenCamera(canvas,video){
        context = canvas.getContext("2d"),
        videoObj = { "video": true },
        errBack = function (error) {console.log("Video capture error: ", error.code)};
        //navigator.getUserMedia这个写法在Opera中好像是navigator.getUserMedianow       
        if (navigator.getUserMedia) {     
              navigator.getUserMedia(videoObj, function (stream) {
                  video.src = stream;
                  video.play();
            }, errBack);
        } else if (navigator.webkitGetUserMedia) {
              navigator.webkitGetUserMedia(videoObj, function (stream) {
                  video.src = window.URL.createObjectURL(stream);
                  //video.play();
              }, errBack);
        }
}