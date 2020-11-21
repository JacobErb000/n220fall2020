let objects = [

    { color: "#FF0000", height: "100px", width: "300px" },
   
    { color: "#FFFF00", height: "200px", width: "200px" },
   
    { color: "#ff0000", height: "300px", width: "100px" },
   
   ];

for(var i = 0; i < objects.length; i++){
    var curDiv = objects[i];

    var newEl = document.createElement("div");

    newEl.style.backgroundColor = curDiv.color;
    newEl.style.height = curDiv.height;
    newEl.style.width = curDiv.width;

    document.body.appendChild(newEl);
}