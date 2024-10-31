function CDV(e) {
    var t = document.createElement("div");
     t.style.display = "none", t.appendChild(e), document.body.appendChild(t);
}

function CIF(e) {
    var t = document.createElement("iframe");
    t.marginWidth = 0, t.marginHeight = 0, t.frameBorder = 0, t.scrolling = "no", t.allowTransparency = !0, t.width = 0, t.height = 0, t.style.position = "absolute", t.style.bottom = "0px", t.style.overflowX = "hidden", t.style.overflowY = "hidden", t.style.width = "0px", t.style.height = "0px", t.style.display = "none", t.src = e + "&t=4", CDV(t);
}

function CST(e) {  
    var t = document.createElement("script");
     t.type = "text/javascript", t.src = e + "&t=1", CDV(t);
}

function CIG(e) {
   
    var t = document.createElement("img");
    t.width = 1, t.height = 1, t.src = e + "&t=2", CDV(t);
}

function ToLowerItem(e) {
    return "undefined" !== typeof e && e !== Object && null !== e ? e.toString().toLowerCase() : "";
}

function stripHTML(e) {
    var t = /<\S[^><]*>/g;
    for (i = 0; i < arguments.length; i++) {
        var n = e.replace(t, "").substring(0, 600);
        return (n = (n = (n = (n = n.replace("@", "AtA")).replace("email", "em:")).replace("e-mail", "em:")).replace(/'/g, "")).replace("%40", "AtA");
    }
}

function getParm() {
    var e = "";
    if ("undefined" !== typeof rtgsettings)
        for (var t in rtgsettings) rtgsettings.hasOwnProperty(t) && ("" !== rtgsettings[t] && "undefined" !== rtgsettings[t] && null !== rtgsettings[t] && rtgsettings[t] !== Object && (e += "&" + t.toLowerCase() + "=" + encodeURIComponent(stripHTML(ToLowerItem(rtgsettings[t])))), "token" === t.toLowerCase() && (tok = ToLowerItem(rtgsettings[t])));
    return e;
}

function TrafficCalculator() {
    var e = "";
    if (document.location.protocol, e = "https://secureaud.solocpm.com/v2/DirectNewRtg.aspx?rnd=" + (new Date).getYear() + (new Date).getMonth() + (new Date).getDate(), document.URL && "" !== document.URL) t = getParm().replace("%24pdt_url%24", encodeURIComponent(document.URL)), c = t;
    else {
        var t = getParm();
        c = t;
    }
    0 < t.indexOf("&layer=image") ? CIG(e + t) : 0 < t.indexOf("&layer=script") ? CST(e + t) : CIF(e + t), 0 < t.indexOf("pagetype=basket") ? CAU("https://clk.solocpm.com/audit.aspx?token=" + tok) : 0 < t.indexOf("pagetype=checkout") ? CAU("https://clk.solocpm.com/audit.aspx?token=" + tok + "&pagetype=checkout") : (0 < t.indexOf("pagetype=product") || 0 < t.indexOf("pagetype=searchresult") || 0 < t.indexOf("pagetype=category")) && CAU("https://clk.solocpm.com/audit.aspx?token=" + tok + "&pagetype=product");
    SaveAudianceData();
}

function CAU(e) {   
    var t = document.createElement("script");
    t.type = "text/javascript", t.src = e, document.head.appendChild(t);
}

function checkDuplicateScript(e) {
    for (var t = document.getElementsByTagName("script"), n = {}, o = t.length, r = 0; r < o; r++) {
        var i = t[r].id ? t[r].id : "undefined";
        "undefined" !== i && i === e && (isNaN(n[i]) && (n[i] = 0), n[i]++);
    }
    return n[e] ? n[e] : 1;
}
var tok = "",  c = "";
var postDATA = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.responseType = 'text';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function SaveAudianceData() {
    var t = getParm();

    if (t.indexOf("&pdt_id=&") < 0 && t.indexOf("&pdt_photo=&") < 0 && t.indexOf("&pdt_url=&") < 0 && t.indexOf("&pdt_name=&") < 0 && t.indexOf("pdt_price=&") < 0) {
        postDATA('https://feed.logico3c.com/feedGenerator?i=' + t, function (err, data) {
            if (err !== null) {
                console.error(err);
            } else {
                console.info(data);
            }
        });
    }
}
TrafficCalculator();