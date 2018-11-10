class Video {
    constructor(name, link) {
        this._name = name;
        this._link = link;
    }

    get name() {
        return this._name;
    }
    get link() {
        return this._link;
    }
}

let startList = [ new Video("Make Chair", "https://www.youtube.com/emrbed/ypdE5ryNyvM"),
                  new Video("FortNite", "https://player.twitch.tv/?channel=solaryfortnite") ]

function clearPage() {
   document.getElementById("videos").innerHTML = "";
}

function loadPage(videoList) {
    for (let i = 0; i < videoList.length; i++) {
        let videoRow = document.createElement("div");
        let videoBox = document.createElement("div");
        let videoHeader = document.createElement("h3");
        let video = document.createElement("iframe");
        let videoListElement = document.querySelector("#videos");

        videoRow.className = "row";
        videoHeader.innerHTML = videoList[i].name;

        videoBox.className = "col-sm-12";


        video.setAttribute("width", "400");
        video.setAttribute("height","300");
        video.setAttribute("src", videoList[i].link);
        video.setAttribute("allowfullscreen", "");

        videoBox.appendChild(videoHeader);
        videoBox.appendChild(video);
        videoRow.appendChild(videoBox);
        videoListElement.appendChild(videoRow);
    }
}

function search() {
    let searchList = [];
    let searchBar = document.getElementById("searchBar").value.toLowerCase();

    for(let i = 0; i < startList.length; i++) {
       if( startList[i].name.toLowerCase().includes(searchBar) ) {
           console.log(startList[i].name);
           searchList.push(startList[i]);
       }
    }

    clearPage();
    loadPage(searchList);
}

loadPage(startList)
