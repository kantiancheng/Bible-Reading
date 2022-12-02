//文字区域dom更新
function word_part_update(language, book, chapter, verse) {
    let word_part_element = document.getElementById("Words_Part");

    function update_html() {
        try {
            word_part_element.innerHTML = analyze_json(book, chapter, verse);
            console.log("%cSuccessfully update the page", "font-weight:bold;");
        } catch {
            console.log("%cfail to update the page, re-trying.....", "font-weight:bold;");
            setTimeout(update_html(), 3000);
        }
    }

    get_json(language);
    setTimeout(update_html(), 3000);
}