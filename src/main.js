const div = dom.find("#test>.red")[0];
dom.style(div, "color", "red"); //div.style.color

const divList = dom.find(".red");
dom.each(divList, n => console.log(n)); //输出divList

dom.style(divList[1], { color: "white", background: "green" });
