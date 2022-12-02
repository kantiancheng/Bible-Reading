//解析json
function analyze_json(book, chapter, verse) {
    let Analyze_json;
    if (chapter == undefined) {
        Analyze_json = Bible[book].chapters;
        let Revise = "";
        for (let i = 0; i < Analyze_json.length; i++) {
            Revise += "<b>" + (i + 1) + "</b>";
            for (let j = 0; j < Analyze_json[i].length; j++) {
                Revise += "<sup>" + (j + 1) + "</sup>";
                Revise += Analyze_json[i][j];
            }
        }
        Analyze_json = Revise;
        console.log("%cSince there are no valid chapters, the entire book will be returned directly.", "font-weight:bold;");
    } else if (verse == undefined) {
        Analyze_json = Bible[book].chapters[chapter];
        let Revise = "";
        for (let i = 0; i < Analyze_json.length; i++) {
            Revise += "<sup>" + (i + 1) + "</sup>";
            Revise += Analyze_json[i];
        }
        Analyze_json = Revise;
        console.log("%cThe entire chapter is returned because there is no valid verse.", "font-weight:bold;");
    } else {
        Analyze_json = Bible[book].chapters[chapter][verse];
        console.log("%cAll information will be returned" + "chapter" + chapter + " ," + "verse" + verse + ".", "font-weight:bold;");
    }
    console.log("%cSuccessfully analyze Json file:", "font-weight:bold;");
    return Analyze_json;
}