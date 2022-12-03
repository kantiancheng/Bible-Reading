//加载框
function loading_box_onload() {
    document.getElementById("Main_Box").style.display = "none";
    let loading_box_HTML = document.getElementById("Body");
    let loading_box_el = document.createElement("div");
    loading_box_el.id = "Loading_box";
    loading_box_el.className = "Loading_box";
    loading_box_HTML.append(loading_box_el);
}

//加载框更新
function loading_box_update(words) {
    let loading_box_el = document.getElementById("Loading_box");
    loading_box_el.append("<br />");
    loading_box_el.append(words);
    console.log("%c" + words, "font-weight:bold;");
}

//加载框删除
function loading_box_remove() {
    document.getElementById("Loading_box").remove();
    document.getElementById("Main_Box").style.display = "inline";
}