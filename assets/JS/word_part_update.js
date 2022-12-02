//文字区域dom更新
function word_part_update(language, book, chapter, verse) {
    let word_part_element = document.getElementById("Words_Part");
    let re_try_times = 5;

    function update_html() {
        try {
            word_part_element.innerHTML = analyze_json(book, chapter, verse);
            console.log("%cSuccessfully update the page", "font-weight:bold;");
        } catch {
            if (re_try_times <= 0) {
                console.log("%cfail to update the page!!!pleas re-try later.", "font-weight:bold;");
            } else {
                console.log("%cfail to update the page, re-trying.....", "font-weight:bold;");
                console.log("%c" + re_try_times + " re-try times remaining", "font-weight:bold;");
                re_try_times--;
                setTimeout(update_html(), 3000);
            }
        }
    }

    get_json(language);
    setTimeout(update_html(), 3000);
}