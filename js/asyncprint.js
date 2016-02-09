/**
 * Created by Sergey on 09.02.2016.
 */
function goAsyncPrint() {
    var resource = document.createElement('link');
    resource.setAttribute("rel", "stylesheet");
    resource.setAttribute("href","css/style.css");
    resource.setAttribute("type","text/css");
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(resource);
}
window.addEventListener("load", function(event) {
    goAsyncPrint();
});
