//加载框
function loading_box_onload() {
    let loading_box_HTML = document.getElementById("Words_Part");

    let loading_box_Main = document.createElement("div");
    loading_box_Main.id = "Loading_box";
    loading_box_Main.className = "Loading_box";

    let loading_box_Img = document.createElement("div");
    loading_box_Img.id = "Loading_box_img";
    loading_box_Img.innerHTML="<img src='./assets/IMG/Bible Reading-logos.jpeg'>";

    let loading_box_Word = document.createElement("div");
    loading_box_Word.id = "Loading_box_word";

    loading_box_Main.append(loading_box_Img);
    loading_box_Main.append(loading_box_Word);

    loading_box_HTML.append(loading_box_Main);
}

//加载框更新
function loading_box_update(words) {
    document.getElementById("Loading_box").style.display = "inline";
    let Loading_box_word = document.getElementById("Loading_box_word");
    Loading_box_word.innerHTML = words;
    console.log("%c" + words, "font-weight:bold;");
}

//加载框删除
function loading_box_remove() {
    setTimeout(() => {
        document.getElementById("Loading_box").style.display = "none";
    }, 2000);
}