//文字区域dom更新
function word_part_update(language, book, chapter, verse) {

    let word_part_element = document.getElementById("Words_Part");

    let json_file_get = new Promise((resolve, reject) => {
        get_json(language);
    });

    word_part_element.innerHTML = analyze_json(book, chapter, verse);
}