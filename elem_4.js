/**
饿了么-做任务赚吃货豆：逛逛美食团购+5豆
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

const url = `https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1390001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D&bizCode=biz_code_main&longitude=115.99748992919922&latitude=23.06479835510254&o2o_page_id=lremyh1f0utjs0qkbyhkz7166c2gwl0f_1626067525120`;
const method = `GET`;
const headers = {
'f-refer' : `wv_h5`,
'Accept-Encoding' : `gzip, deflate, br`,
'x-shard' : `loc=115.99748992919922,23.06479835510254`,
'Connection' : `keep-alive`,
'User-Agent' : `Rajax/1 Apple/iPhone10,3 iOS/14.7 Eleme/10.0.5 ID/8D342FDF-C940-4E88-9796-3A3B692A19F2; IsJailbroken/0 Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(ELMC/10.0.5) UT4Aplus/0.0.6 WindVane/8.7.2 1125x2436 WK`,
'f-pTraceId' : `WVNet_WV_2-2-70`,
'x-mini-wua' : `HHnB_nFofrjf4MM29YktPyM/3b13mpRPF0p11fdpTTpuWywiKSCQwG/q/IvPxi/XXLr1N1FzPqA5F0Dcc2+Gq6wf+5j2UmNRZpPAqbjtGwiunRpU+sJD9LktTIzz8d37YSo67`,
'x-ua' : `RenderWay/H5 AppName/elmc DeviceId/8D342FDF-C940-4E88-9796-3A3B692A19F2 AppExtraInfo/%7B%22miniWua%22%3A%22HHnB_gw0V%2Fkr0t7qzqUJGvyESmmNSiJBQUu2JhvUnYdGN6Y7e2T%2BJ8igYPQyWQB6zmz8naP1MKXFfPg%2BlKJw%2FU4I%2F%2FaLcjvRnv7DeYDGKy3291z%2FiQij7rocu1Gjk3oyUHucF%22%2C%22umidToken%22%3A%22WhhL7l5LOuA02zV6mSX7TFlAEHlN1rmr%22%2C%22ttid%22%3A%22201200%40eleme_iphone_10.0.5%22%2C%22deviceUUID%22%3A%228D342FDF-C940-4E88-9796-3A3B692A19F2%22%2C%22utdid%22%3A%22XawidJAv4m0DAPTl%2BzRKuuss%22%7D Longitude/115.99748992919922 Latitude/23.06479835510254`,
'Host' : `h5.ele.me`,
'Referer' : `https://h5.ele.me/svip/task-list?spm=a2ogi.15080242.moretask.1`,
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

sy.msg('逛逛美食团购+5豆');

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