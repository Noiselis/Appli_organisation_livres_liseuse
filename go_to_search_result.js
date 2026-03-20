






let go_to_search_result_button = document.getElementsByName("commit");

function go_to_search_result(){
    console.log("Going to the search result page");
    window.location.href = '../html/search_result_page.html';
}

for (let search_button of go_to_search_result_button) {
    search_button.addEventListener("click", go_to_search_result);
}





















