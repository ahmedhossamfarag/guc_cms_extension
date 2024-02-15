const files = []

for (let f of document.querySelectorAll(".card .card .card-body")) { 
    const file = {
        name : f.children[0].textContent.slice(4),
        src : f.children[2].children[0].children[1].getAttribute('data-url'),
        get isVideo(){return this.src.endsWith('.mp4')},
        downloadFile : function() {
            let a = document.createElement('a')
            a.download = this.name
            a.href = this.src
            //a.click()
        }
    }
    files.push(file)
    f.children[2].children[0].children[0].download = file.name
 }


function download(t){
    for(let f of files){
        if(f.isVideo && (t==0  || t == 2)){
            f.downloadFile()

        }
        else if(!f.isVideo && (t==0  || t == 1)){
            f.downloadFile()
        }
    }
}

// Button
var b = document.createElement("div")
// Style
b.style.cursor = "pointer"
b.style.textAlign = 'start'
b.style.color = "blue"

// Icon


var i = document.createElement("i")
i.classList.add("fas","fa-download")
b.appendChild(i)

//  List

var l = document.createElement("ul")
l.style.display = 'none'
l.style.width = '200px'
l.style.listStyle = 'none'
let options = ['Download All', 'Download Files', 'Download Videos']
for (let i = 0; i < options.length; i++) {
    let o = document.createElement('li')
    o.textContent = options[i]
    o.onmouseenter = function(){o.style.backgroundColor = 'blue'; o.style.color = 'white'}
    o.onmouseleave = function(){o.style.backgroundColor = 'white'; o.style.color = 'blue'}
    o.onclick = function(){download(i)}
    l.appendChild(o)
}
b.appendChild(l)
//
// Hover
b.onmouseenter = function(){
    l.style.display = 'block'
}
b.onmouseleave = function(){
    l.style.display = 'none'
}

//
var q = document.querySelectorAll(".widget-content-wrapper")
if(q.length > 1)
    q[1].appendChild(b)
