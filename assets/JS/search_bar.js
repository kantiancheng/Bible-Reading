//顶部搜索栏
function search_bar() {
    let Search_Bar = new Object();
    Search_Bar.Book = document.getElementById("Search_Bar_Box_B").selectedIndex;
    Search_Bar.Chapter = document.getElementById("Search_Bar_Box_C").value;
    Search_Bar.Verse = document.getElementById("Search_Bar_Box_V").value;
    Search_bar.Language = document.getElementById("Search_Bar_Box_L").selectedIndex;

    
}