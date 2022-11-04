var cssFile = document.createElement("link");
cssFile.rel = "stylesheet";
cssFile.href = "./widget/index.css";
document.head.appendChild(cssFile);

var elem = document.createElement("div");
elem.id = "widgetroot";
console.log(elem);
document.body.appendChild(elem);

var jsFile1 = document.createElement("script");
jsFile1.type = "text/javascript";
jsFile1.src = "./widget/index.js";
document.body.appendChild(jsFile1);

// var currentURL = window.location.href;
// var splits = currentURL.split("/");
// var domain = console.log(splits[2]);

// var apiURL = "https://192.168.112.159:5000/api";
// fetch(apiURL, {
//   method: "POST",
//   body: JSON.stringify({ domain }),
//   headers: { "Content-type": "application/json; charset=UTF-8" },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
