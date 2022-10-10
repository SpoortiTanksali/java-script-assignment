function getVideo() {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            if(getVideo()){
                resolve("Got Video");
            }else{
                reject("Didn't got video");
            }
            
        }, 3000);
        
    })
    
}
let methodForresolve=(result)=>{
    console.log("Message after Resolve=" +result);
}
let methodForreject=(reject)=>{
    console.log("Message after Reject=" +reject);
}
function addIntro() {
    return new Promise(function (resolve,reject) {
        setTimeout(()=>{
            if(addIntro()){
                resolve("Intro added");
            }else{
                reject("Intronot added");
            }
        },3000);
        
    })
    
}
function addSummary() {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            if(addSummary()){
                resolve("summary Added");
            }else{
                reject("Summary not added")
            }    
        }, 3000);
        
    })
    
}
getVideo().then(methodForresolve).catch(methodForreject);
try{

} 
finally{(()=>{
    console.log('got video, intro added, summary added');
})};
addIntro().then(methodForresolve).catch(methodForreject);
addSummary().then(methodForresolve).catch(methodForreject);

