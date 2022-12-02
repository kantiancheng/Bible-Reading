//文字区域dom更新
function word_part_update(language, book, chapter, verse) {
    let word_part_element = document.getElementById("Words_Part");
    try {
        get_json(language);
    } catch (error) {
        console.log("%clanguage code dose not find, or the network have problem.", "font-weight:bold;");
    }
    word_part_element.innerHTML = analyze_json(book, chapter, verse);
    console.log("%cSuccessfully update the page", "font-weight:bold;");
}