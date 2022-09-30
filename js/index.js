
function muXie() {
    window.open("./muXiePeiFang.html")
}//打开页面 木屑配方

function index() {
    top.location.replace("./index.html");
}//页面跳转 首页

function index_breed() {
    top.location.replace("./index_breed.html")
}//页面跳转 昆虫饲养

function index_drawing() {
    top.location.replace("./index_drawing.html")
}//页面跳转 绘画作品

function tuJian_insect_qiaoChiMu() {
    top.location.replace("./tuJian_insect_qiaoChiMu.html")
}//页面跳转 鳞翅目

function tuJian_insect_linChiMu() {
    top.location.replace("./tuJian_insect_linChiMu.html")
}//页面跳转 鳞翅目

function tuJian_insect_banChiMu() {
    top.location.replace("./tuJian_insect_banChiMu.html")
}//页面跳转 半翅目

function tuJian_insect_other() {
    top.location.replace("./tuJian_insect_other.html")
}//页面跳转 其他目

function tujian_niaoLei() {
    top.location.replace("./index_tujian_niaoLei.html")
}//页面跳转 鸟类图鉴

function tujian_zhiWu() {
    top.location.replace("./index_tujian_zhiWu.html")
}//页面跳转 植物图鉴

function index_fenLei() {
    top.location.replace("./index_fenLei.html")
}//页面跳转 分类知识

function index_duShuBiJi() {
    top.location.replace("./index_duShuBiJi.html")
}//页面跳转 学习笔记


function index_other() {
    top.location.replace("./index_other.html")
}//其他页面

function bianChengBiJi() {
    window.open("./index_bianChengBiJi.html")
}//页面跳转 编程笔记
function drawing001() {
    window.open("./index_drawing_001.html")
}
function morpho() {
    top.location.replace("./breed_lc_morpho.html")
}//大蓝闪饲养

function jinBanDie() {
    top.location.replace("./breed_lc_jinBanDie.html")
}//金斑蝶饲养

function hongYiQingLong() {
    top.location.replace("./breed_xiu.html")
}//红翼青龙



function index_price() {
    window.open("./index_price.html")
}//询价页面

function index_list() {
    window.open("./index_list.html")
}//各类名录

function zhuanli() {
    top.location.replace("./other_zhuanli.html")
}//专利页面
function key() {
    top.location.replace("./other_key.html")
}//快捷键页面

function szds() {
    top.location.replace("./ebook_szds.html")
}//数字雕塑技法与3D打印
function Blender01() {
    top.location.replace("./ebook_Blender01.html")
}//Blender权威指南

function js01() {
    top.location.replace("./ebook_js01.html")
}//JavaScript DOM 编程艺术

function js02() {
    top.location.replace("./ebook_js02.html")
}//锋利的jquery

function js03() {
    top.location.replace("./ebook_js03.html")
}//条路编程

function stable() {
    top.location.replace("./ebook_stable_diffusion.html")
}//stable diffusion

function penAndInk() {
    top.location.replace("./ebook_draw_penAndInk.html")
}//How to draw in pen and ink


function tang01() {
    window.open("./tujian_tang01.html")
}//宽胸菱背螳
function tang02() {
    window.open("./tujian_tang02.html")
}//眼镜蛇枯叶螳

function xj01() {
    window.open("./tujian_xj01.html")
}//索恩象鼻虫

function jj01() {
    window.open("./tujian_qiaoChiMu_jj01.html")
}//狭茎甲

function xiu01() {
    window.open("./tujian_xiu01.html")
}//艾瑞克叶脩

function xiu02() {
    window.open("./tujian_xiu02.html")
}//虎翼巨人竹节虫

function jd01() {
    window.open("./tujian_qiaoChiMu_jd01.html")
}//彩虹锥齿吉丁

function defh() {
    window.open("./tujian_zhiChiMu_defh.html")
}//短额负蝗
function hjlvh() {
    window.open("./tujian_zhiChiMu_hjlvh.html")
}//花胫绿纹蝗
function edwye() {
    window.open("./tujia_linChiMu_edwye.html")
}//二点委夜蛾
function hzwm() {
    window.open("./tujia_linChiMu_hzwm.html")
}//灰直纹螟
function shzce() {
    window.open("./tujia_linChiMu_shzce.html")
}//上海枝尺蛾

function low_01() {
    top.location.replace("./other_low_01.html")
}//入侵物种相关法律条文

function comp_01() {
    top.location.replace("./other_computer.html")
}//电脑网络相关

function tiao_xiJinGui() {
    location.href = "#tiao_xiJinGui"
}




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

