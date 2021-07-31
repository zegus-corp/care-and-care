let mql = window.matchMedia('(max-width: 768px)');

if (mql.matches) {
    document.getElementById('dynamic').innerHTML = "<h6>&nbsp;</h6>";
}