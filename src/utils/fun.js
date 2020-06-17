import { Toast } from 'mint-ui'
import axios from 'axios'
import base from './api.js'

function isEmoji(substring) {
    for ( var i = 0; i < substring.length; i++) {
        var hs = substring.charCodeAt(i);
        if (0xd800 <= hs && hs <= 0xdbff) {
            if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                if (0x1d000 <= uc && uc <= 0x1f77f) {
                    return true;
                }
            }
        } else if (substring.length > 1) {
            var ls = substring.charCodeAt(i + 1);
            if (ls == 0x20e3) {
                return true;
            }
        } else {
            if (0x2100 <= hs && hs <= 0x27ff) {
                return true;
            } else if (0x2B05 <= hs && hs <= 0x2b07) {
                return true;
            } else if (0x2934 <= hs && hs <= 0x2935) {
                return true;
            } else if (0x3297 <= hs && hs <= 0x3299) {
                return true;
            } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                    || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                    || hs == 0x2b50) {
                return true;
            }
        }
    }
}


//移动端关闭当前页面
function closePage(){
    var userAgent = navigator.userAgent;
    if(userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1){
        window.location.href = "about:blank";
    } else if(userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1){
        window.opener = null;
        window.open('about:blank','_self','').close();
    } else {
        window.opener = null;
        window.open("about:blank", "_self");
        window.close();
    }
}


//判断手机号是否正确
function testPhone(phone){
    let phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
    return phoneReg.test(phone);
}

//判断邮箱
function testEmail(email){
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    return reg.test(email);
}

//判断身份证
function idCardCheck(idNo){
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
    if(!regIdNo.test(idNo)){ 
        return false;
    } else {
        return true;
    }
}


//获取客户端ip
function getIPs(callback){
    var ip_dups = {};

    //compatibility for firefox and chrome
    var RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
    var useWebKit = !!window.webkitRTCPeerConnection;

    //bypass naive webrtc blocking using an iframe
    if(!RTCPeerConnection){
        //NOTE: you need to have an iframe in the page right above the script tag
        //
        //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
        //<script>...getIPs called in here...
        //
        var win = iframe.contentWindow;
        RTCPeerConnection = win.RTCPeerConnection
            || win.mozRTCPeerConnection
            || win.webkitRTCPeerConnection;
        useWebKit = !!win.webkitRTCPeerConnection;
    }

    //minimal requirements for data connection
    var mediaConstraints = {
        optional: [{RtpDataChannels: true}]
    };

    var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};

    //construct a new RTCPeerConnection
    var pc = new RTCPeerConnection(servers, mediaConstraints);

    function handleCandidate(candidate){
        //match just the IP address
        var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
        var ip_addr;
        if(ip_regex.exec(candidate)){
            ip_addr = ip_regex.exec(candidate)[1];
        }

        //remove duplicates
        if(ip_dups[ip_addr] === undefined)
            callback(ip_addr);
        ip_dups[ip_addr] = true;
    }

    //listen for candidate events
    pc.onicecandidate = function(ice){
        //skip non-candidate events
        if(ice.candidate)
            handleCandidate(ice.candidate.candidate);
    };

    //create a bogus data channel
    pc.createDataChannel("");

    //create an offer sdp
    pc.createOffer(function(result){
        //trigger the stun server request
        pc.setLocalDescription(result, function(){}, function(){});

    }, function(){});

    //wait for a while to let everything done
    setTimeout(function(){
        //read candidate info from local description
        var lines = pc.localDescription.sdp.split('\n');
        lines.forEach(function(line){
            if(line.indexOf('a=candidate:') === 0)
                handleCandidate(line);
        });
    }, 1000);
}


//微信jssdk
function getShare(){
    let that = this;
    let pageUrl = encodeURIComponent(location.href.split('#')[0]);  //只要域名那一块
    console.log('pageUrl(no encode)', location.href.split('#')[0]);

    axios.get(base.getShare3, {params:{pageUrl:pageUrl}}).then(res=>{
    console.log('getShare', res.data);

    wx.config({
        debug: false, // 调试模式
        appId: base.appid, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
        signature: res.data.signature,// 必填，签名，见附录1
        jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
        var link = window.location.href;
        var protocol = window.location.protocol;
        var host = window.location.host;
        //link = link.split('/?')[0] + '/#/' + link.split('#/')[1];
        //console.log('link:'+link);

        //分享朋友圈
        wx.onMenuShareTimeline({
            title: 'V盟，让城市生活更美好',
            link: link,
            imgUrl: protocol+'//'+host+'/wk_vote_node/public/vmeng.jpg',// 自定义图标
        });
        //分享给好友
        wx.onMenuShareAppMessage({
            title: 'V盟，让城市生活更美好', // 分享标题
            desc: 'V盟北京 焕新上线', // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: protocol+'//'+host+'/wk_vote_node/public/vmeng.jpg', // 自定义图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        });
        wx.error(function (res) {
            console.log('wx.error', res.errMsg);
        });
    });

    }).catch(err=>{
        console.log(err);
    })
}



module.exports = {
    isEmoji,
    closePage,
    testPhone,
    testEmail,
    idCardCheck,
    getIPs,
    getShare
}