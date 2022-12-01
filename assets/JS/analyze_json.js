//解析json
function analyze_json(book, chapter, verse) {
    let Analyze_json;
    if (chapter == undefined) {
        Analyze_json = Bible[book].chapters;
        console.log("%cSince there are no valid chapters, the entire book will be returned directly.", "font-weight:bold;");
    } else if (verse == undefined) {
        Analyze_json = Bible[book].chapters[chapter];
        console.log("%cThe entire chapter is returned because there is no valid verse.", "font-weight:bold;");
    } else {
        Analyze_json = Bible[book].chapters[chapter][verse];
        console.log("%cAll information will be returned" + "chapter" + chapter + " ," + "verse" + verse + ".", "font-weight:bold;");
    }
    console.log("%cSuccessfully analyze Json file:", "font-weight:bold;");
    return Analyze_json;
}