//解析json
function analyze_json(book, chapter, verse) {
    let Analyze_json;
    if (chapter == undefined) {
        Analyze_json = Bible[book].chapters;
        console.log("Since there are no valid chapters, the entire book will be returned directly.");
    } else if (verse == undefined) {
        Analyze_json = Bible[book].chapters[chapter];
        console.log("The entire chapter is returned because there is no valid verse.");
    } else {
        Analyze_json = Bible[book].chapters[chapter][verse];
        console.log("All information will be returned" + "chapter" + chapter + " ," + "verse" + verse + ".");
    }
    console.log("Successfully analyze Json file");
    return Analyze_json;
}