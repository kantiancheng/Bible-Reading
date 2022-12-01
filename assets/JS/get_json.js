//从服务器获取Json文件
function get_json(language) {
    let parsed_json;
    //语言列表
    /*  if (language == "ar_svd") {
          //阿拉伯语

      } else if (language == "zh_cuv") {
          //中华联盟版

      } else if (language == "zh_ncv") {
          //中文新版本

      } else if (language == "de_schlachter") {
          //德语

      } else if (language == "el_greek") {
          //现代希腊语

      } else if (language == "en_bbe") {
          //基础英语

      } else if (language == "en_kjv") {
          //詹姆斯国王版本(英语)

      } else if (language == "eo_esperanto") {
          //世界语

      } else if (language == "es_rvr") {
          //西班牙语

      } else if (language == "fi_finnish") {
          //芬兰圣经

      } else if (language == "fi_pr") {
          //Pyhä Raamattu(芬兰)

      } else if (language == "fr_apee") {
          //法语

      } else if (language == "ko_ko") {
          //韩语版

      } else if (language == "pt_aa") {
          //Almeida Revisada Imprensa Bíblica(葡萄牙)

      } else if (language == "pt_acf") {
          //Almeida Corrigida e Revisada Fiel(葡萄牙)

      } else if (language == "pt_nvi") {
          //新韦尔桑国际(葡萄牙)

      } else if (language == "ro_cornilescu") {
          //罗马尼亚语

      } else if (language == "ru_synodal") {
          //俄语

      } else if (language == "vi_vietnamese") {
          //越南语

      }*/
    console.log("%cStart requesting from the server json file", "font-weight:bold;");
    fetch('https://raw.githubusercontent.com/kantiancheng/Bible-Reading/main/Bible_json/' + language + '.json')
        .then(
            function (response) {
                console.log("%cStart parsing the returned Json file", "font-weight:bold;");
                return response.json();
            })
        .then(function (json) {
            console.log(json);
            console.log("%cThe Json file is parsed successfully", "font-weight:bold;");
            parsed_json = json;
        })
        .catch((error) => {
            console.log("%cThe Json file is parsed DFEATED", "font-weight:bold;");
            console.log('%c' + error, "font-weight:bold;");
        });
    return console.log("variable: 'Bible' are The json");
}