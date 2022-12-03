//加载框
function loading_box_onload() {
    document.getElementById("Body").style.backgroundColor="black";
    document.getElementById("Main_Box").style.display = "none";
    let loading_box_HTML = document.getElementById("Body");
    let loading_box_el = document.createElement("div");
    loading_box_el.id = "Loading_box";
    loading_box_el.className = "Loading_box";
    loading_box_HTML.append(loading_box_el);
}

//加载框更新
function loading_box_update(words) {
    document.getElementById("Body").style.backgroundColor="black";
    document.getElementById("Main_Box").style.display = "none";
    document.getElementById("Loading_box").style.display = "inline";
    let loading_box_el = document.getElementById("Loading_box");
    let br_el = document.createElement("br");
    loading_box_el.append(br_el);
    loading_box_el.append(words);
    loading_box_el.append(br_el);
    console.log("%c" + words, "font-weight:bold;");
}

//加载框删除
function loading_box_remove() {
    document.getElementById("Body").style.backgroundColor="rgb(255, 255, 255)";
    document.getElementById("Loading_box").style.display = "none";
    document.getElementById("Main_Box").style.display = "inline";
}