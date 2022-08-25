
function muXie() {
    window.open("./muXiePeiFang.html")
}//打开页面 木屑配方

function index() {
    window.location.href = ("./index.html")
}//页面跳转 首页

function index_breed() {
    window.location.href = ("./index_breed.html")
}//页面跳转 昆虫饲养

function index_drawing() {
    window.location.href = ("./index_drawing.html")
}//页面跳转 绘画作品

function index_tujian() {
    window.location.href = ("./index_tujian.html")
}//页面跳转 昆虫图鉴

function index_fenLei() {
    window.location.href = ("./index_fenLei.html")
}//页面跳转 分类知识

function bianChengBiJi() {
    window.location.href = ("./index_bianChengBiJi.html")
}//页面跳转 编程笔记
function drawing001() {
    window.open("./index_drawing_001.html")
}
function morpho() {
    window.location.href = "./breed_lc_morpho.html"
}//大蓝闪饲养

function jinBanDie() {
    window.location.href = "./breed_lc_jinBanDie.html"
}//金斑蝶饲养

function hongYiQingLong() {
    window.open("./breed_xiu.html")
}//红翼青龙

function index_duShuBiJi() {
    window.location.href = "./index_duShuBiJi.html"
}//读书笔记页面


function index_other() {
    window.location.href = "./index_other.html"
}//其他页面

function index_price() {
    window.open("./index_price.html")
}//询价页面

function zhuanli() {
    window.open("./other_zhuanli.html")
}//专利页面
function key() {
    window.open("./other_key.html")
}//快捷键页面

function szds() {
    window.open("./ebook_szds.html")
}//数字雕塑技法与3D打印
function Blender01() {
    window.open("./ebook_Blender01.html")
}//Blender权威指南

function js01() {
    window.open("./ebook_js01.html")
}//JavaScript DOM 编程艺术

function js02() {
    window.open("./ebook_js02.html")
}//锋利的jquery

function tang01() {
    window.open("./tujian_tang01.html")
}//宽胸菱背螳
function tang02() {
    window.open("./tujian_tang02.html")
}//眼镜蛇枯叶螳





function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    let text = whichpic.getAttribute('title');
    let dsc = document.getElementById('des');
    dsc.firstChild.nodeValue = text;
    let text2 = whichpic.getAttribute('title2');
    let dsc2 = document.getElementById('des2');
    dsc2.firstChild.nodeValue = text2;
}

