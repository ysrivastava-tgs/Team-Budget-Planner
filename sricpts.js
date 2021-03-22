
     (()=>{
        var i;
        if(sessionStorage.getItem("index")==null)
        {
            sessionStorage.setItem("index",0);
            i = 0;
        }
        else{
            i = sessionStorage.getItem("index");
        }
       
     })();
     (()=>{
        
            var obj = sessionStorage;
            console.log(obj);
            for(var i in obj)
            {
                if(obj[i].valueOf().indexOf("add")!=-1)
                {
                    var ad = document.getElementById(obj[i]);
                    
                    ad.style.visibility = "hidden";
                  
                }
                if(obj[i].indexOf("rem")!=-1)
                {
                    var ad = document.getElementById(obj[i]);
                    ad.style.visibility = "visible";
                }
            }
     })();
     
    function setCookie(rem,add,service){
        sessionStorage.setItem(add,add);
        sessionStorage.setItem(rem,rem);
      var i = parseInt(sessionStorage.getItem("index"));
    var r = document.getElementById(rem);
    r.style.visibility = "visible";
    var a = document.getElementById(add);
    a.style.visibility = "hidden";
    localStorage.setItem("service"+(i),service);
    
    i = (i+1);
    sessionStorage.setItem("index",i);
 console.log(localStorage.length);
}
function remCookie(rem,add,service){
    sessionStorage.removeItem(add);
    sessionStorage.removeItem(rem);
    var r = document.getElementById(rem);
    r.style.visibility = "hidden";
    var a = document.getElementById(add);
    a.style.visibility = "visible";
    var s = service;
    for(var i=0;i<localStorage.length;i++)
    {
        var item = localStorage.getItem("service"+(i));
        if(item==service)
        {
             localStorage.removeItem("service"+(i));
            console.log(true);
            var t = sessionStorage.getItem("index");
            t-=1;
            sessionStorage.setItem("index",t);
        }
    }
   
}
