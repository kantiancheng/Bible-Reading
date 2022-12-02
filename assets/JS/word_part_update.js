//文字区域dom更新
function word_part_update(language, book, chapter, verse) {
    let word_part_element = document.getElementById("Words_Part");
    get_json(language);
    word_part_element.innerHTML = analyze_json(book, chapter, verse);
}