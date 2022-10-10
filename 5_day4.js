async function s() {
    function GetVideo() {
        console.log("Got Video");
        
    }
    function AddIntro() {
        return console.log("intro added");
        
    }
    function AddSummary() {
        return console.log("summary added");
        
    }
    GetVideo();
    await AddIntro();
    AddSummary();
}
s();
console.log("checking the await function");
    
