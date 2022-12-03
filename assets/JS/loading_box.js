//加载框
function loading_box_onload() {
    let loading_box_HTML = document.getElementById("Body");
    let loding_box_el = document.createElement("div");
    loding_box_el.id = "Loading_box";
    loding_box_el.className = "Loading_box";
    loading_box_HTML.append(loding_box_el);
}

//加载框更新
function loading_box_onload(words) {
    let loding_box_el = document.getElementById("Loading_box");
    let loding_box_newline = document.createElement("div");
    loding_box_newline.innerHTML = words;
    loding_box_el.append("<br>" + loding_box_newline);
}

//加载框删除
function loading_box_remove() {
    document.getElementById("Loading_box").remove();
}