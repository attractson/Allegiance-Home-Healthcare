function openPage(pageName,elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    if(pageName != 'About'){
        document.getElementById("video").style.display = "none";
    }else{
        document.getElementById("video").style.display = "block";
    }

    if(pageName != 'Photo'){
        document.getElementById("photoTab").style.display = "none";
    }else{
        document.getElementById("photoTab").style.display = "block";
    }

    if(pageName != 'Video'){
        document.getElementById("videoTab").style.display = "none";
    }else{
        document.getElementById("videoTab").style.display = "block";
    }

    if(pageName != 'News'){
        document.getElementById("newsTab").style.display = "none";
    }else{
        document.getElementById("newsTab").style.display = "block";
    }

    if(pageName != 'Apply'){
        document.getElementById("applyTab").style.display = "none";
    }else{
        document.getElementById("applyTab").style.display = "block";
    }



    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "grey";
    }
    
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();