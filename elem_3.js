/**
饿了么-做任务赚吃货豆：看看最优惠的水果爆款清单+10豆
 */
const delay = 3000;
const cookieName = '饿了么'
const cookieKey = 'cookie_elem'
const UserId = 'user_id_elem'
const sy = init()
var cookieVal = sy.getdata(cookieKey);
var regx = /USERID=\d+/;

var userid = cookieVal.match(regx)[0];
userid = userid.replace('USERID=', '');

const url = `https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1130001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D&bizCode=biz_code_main&longitude=116.28157043457031&latitude=23.026212692260742&o2o_page_id=lg8wviaufbsv5g9hm9z4d0jmuboy4hju_1626309889523`;
const method = `GET`;
const headers = {
'f-refer' : `wv_h5`,
'Accept-Encoding' : `gzip, deflate, br`,
'x-shard' : `loc=116.28157043457031,23.026212692260742`,
'Connection' : `keep-alive`,
'User-Agent' : `Rajax/1 Apple/iPhone10,3 iOS/14.7 Eleme/10.0.5 ID/8D342FDF-C940-4E88-9796-3A3B692A19F2; IsJailbroken/0 Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(ELMC/10.0.5) UT4Aplus/0.0.6 WindVane/8.7.2 1125x2436 WK`,
'f-pTraceId' : `WVNet_WV_1-1-101`,
'x-mini-wua' : `HHnB_PsggOPPV4kjVlZtS6cEhAs27zUN3htwUIzVhl4ZeGsMFYHwhR535UvkmVS1DXhl5EIplojG+hikXwL3jcAjkaaCS+5TUvgDPME0wNHBoGMDQy959XAdA6HDQhMjHujhl`,
'x-ua' : `RenderWay/H5 AppName/elmc DeviceId/8D342FDF-C940-4E88-9796-3A3B692A19F2 AppExtraInfo/%7B%22miniWua%22%3A%22HHnB_62IkaXVv3LP2l7wTAThTTyIPpYSOp1QPQlVTOZ81VZQ2RzaO83ZEggxswsOKPQQn8CExB63pv2PMjYtRilKE%2BD0T9u0oU8mOi%2FoKw1FiPblr3qqjF2R84MLfRx08RT23%22%2C%22umidToken%22%3A%22gv5LR2FLOrWTiTV6p7AErb9Ln4OkaLuV%22%2C%22ttid%22%3A%22201200%40eleme_iphone_10.0.5%22%2C%22deviceUUID%22%3A%228D342FDF-C940-4E88-9796-3A3B692A19F2%22%2C%22utdid%22%3A%22XawidJAv4m0DAPTl%2BzRKuuss%22%7D Longitude/116.28157043457031 Latitude/23.026212692260742`,
'Host' : `h5.ele.me`,
'Referer' : `https://h5.ele.me/svip/task-list`,
    'Cookie': cookieVal,
'Accept-Language' : `zh-cn`,
'Accept' : `application/json, text/plain, */*`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

sy.msg('看看最优惠的水果爆款清单+10豆');


function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    post = (options, callback) => {
        if (isQuanX()) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge()) $httpClient.post(options, callback)
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}



function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}