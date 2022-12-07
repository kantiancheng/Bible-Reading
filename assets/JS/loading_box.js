//加载框
function loading_box_onload() {
    let loading_box_HTML = document.getElementById("Body");

    let loading_box_Main = document.createElement("div");
    loading_box_Main.id = "Loading_box";
    loading_box_Main.className = "Loading_box";

    let loading_box_Img = document.createElement("div");
    loading_box_Img.id = "Loading_box_img";

    let loading_box_Word = document.createElement("div");
    loading_box_Word.id = "Loading_box_word";

    loading_box_Main.append(loading_box_Img);
    loading_box_Main.append(loading_box_Word);

    loading_box_HTML.append(loading_box_Main);
}

//加载框更新
function loading_box_update(words) {

    console.log("%c" + words, "font-weight:bold;");
}

//加载框删除
function loading_box_remove() {
    document.getElementById("Loading_box").style.display = "none";
    document.getElementById("Main_Box").style.display = "inline";
}