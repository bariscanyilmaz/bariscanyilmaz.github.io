
var articlesElement = null;
var menuBtn=null;
var MEDIUM_ARTICLES = [];
window.onload = () => {

    articlesElement = document.querySelector('.articles');
    menuBtn=document.querySelector('.menu.hamburger-menu');
    menuBtn.addEventListener('click',(e)=>{
        menuBtn.classList.add('hamburger-spin');

        setTimeout(() => {
            window.scrollTo(0,370);    
            
        }, 600);

        setTimeout(() => {
            menuBtn.classList.remove('hamburger-spin');
        }, 2000);
    });

    getBlogs();
    
}


getBlogs = async () => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40bariscanyilmaz').then(res => {
        return res.json();
    }).then(jsonResp => {
        (jsonResp.items.filter(a => a.categories.length > 0)).forEach(element => {
            const articleTemplate = `<div class="article">
            <a href="${element.guid}" target="blank">
            ${element.title}
            </a>
        </div>`;
            articlesElement.innerHTML+=articleTemplate;
        });;
    })
}