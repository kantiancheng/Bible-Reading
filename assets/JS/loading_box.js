//加载框
function loading_box_onload() {
    document.getElementById("Main_Box").style.display = "none";
    let loading_box_HTML = document.getElementById("Body");
    let loading_box_Main = document.createElement("div");
    loading_box_Main.id = "Loading_box";
    loading_box_Main.className = "Loading_box";
    let loading_box_Img = document.createElement("div");
    loading_box_Img.id = "Loading_box_img";
    let loading_box_Word = document.createElement("div");
    loading_box_Word.id = "Loading_box_word";
    loading_box_HTML.append(loading_box_Main);
}

//加载框更新
function loading_box_update(words) {
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
    document.getElementById("Loading_box").style.display = "none";
    document.getElementById("Main_Box").style.display = "inline";
}