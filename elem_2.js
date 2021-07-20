/**
饿了么-做任务赚吃货豆：玩一玩幸运夺宝+5豆
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

const url = `https://h5.ele.me/restapi/biz.svip_scene/svip/engine/xSupply?params[]=%7B%22tagCode%22:%22223166%22,%22extra%22:%7B%22missionDefId%22:1728001,%22missionCollectionId%22:36,%22missionType%22:%22SIMPLESIGNIN%22%7D%7D&bizCode=biz_code_main&longitude=116.460693359375&latitude=23.248676300048828&o2o_page_id=j2gtyhk81gr9r72ef8maqfeltlypdty8_1626775937659`;
const method = `GET`;
const headers = {
'f-refer' : `wv_h5`,
'Accept-Encoding' : `gzip, deflate, br`,
'x-shard' : `loc=116.460693359375,23.248676300048828`,
'Connection' : `keep-alive`,
'User-Agent' : `Rajax/1 Apple/iPhone10,3 iOS/14.7 Eleme/10.0.5 ID/8D342FDF-C940-4E88-9796-3A3B692A19F2; IsJailbroken/0 Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(ELMC/10.0.5) UT4Aplus/0.0.6 WindVane/8.7.2 1125x2436 WK`,
'f-pTraceId' : `WVNet_WV_1-1-18`,
'x-mini-wua' : `HHnB_pPwbDRvxlzV/ZogWyx1bpM9TTsA0oQv/T+Y0LCMzJxdPGdkYoQquUBhQtHvx21GvtIGsM6AdAjcYzKy6I/ltZnKksh3SERf95HthGh3iU3S17mN3hqB6xaO8MHZn8EQE`,
'x-ua' : `RenderWay/H5 AppName/elmc DeviceId/8D342FDF-C940-4E88-9796-3A3B692A19F2 AppExtraInfo/%7B%22miniWua%22%3A%22HHnB_RgZYK%2BtPOG8gOdq4pK3YHn%2F5GQHZDRPQSb0e2jXtv2dM9tskhrzzne%2BGtRHFR144nuv1VvHhwVb2osO%2F0M%2FDdRC3%2FVojIveXNXwy9PAlOvJIzYsR8XpSCJEeeIZC%2FQvD%22%2C%22umidToken%22%3A%228WhLUnpLOtvd6jV6w1We0SIDYmkFzefl%22%2C%22ttid%22%3A%22201200%40eleme_iphone_10.0.5%22%2C%22deviceUUID%22%3A%228D342FDF-C940-4E88-9796-3A3B692A19F2%22%2C%22utdid%22%3A%22XawidJAv4m0DAPTl%2BzRKuuss%22%7D Longitude/116.460693359375 Latitude/23.248676300048828`,
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

sy.msg('玩一玩幸运夺宝+5豆');

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