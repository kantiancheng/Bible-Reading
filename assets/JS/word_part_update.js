//文字区域dom更新
function word_part_update(language, book, chapter, verse) {
    let word_part_element = document.getElementById("Words_Part");

    function update_html() {
        word_part_element.innerHTML = analyze_json(book, chapter, verse);
        console.log("%cSuccessfully update the page", "font-weight:bold;");
    }

    get_json(language);
    update_html();
}