var cssFile = document.createElement("link");
cssFile.rel = "stylesheet";
cssFile.href = "https://custdelight-3du3.onrender.com/widget/index.css";
document.head.appendChild(cssFile);

var elem = document.createElement("div");
elem.id = "widgetroot";
console.log(elem);
document.body.appendChild(elem);

var jsFile1 = document.createElement("script");
jsFile1.type = "text/javascript";
jsFile1.src = "https://custdelight-3du3.onrender.com/widget/index.js";
document.body.appendChild(jsFile1);
