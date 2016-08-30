//"baseurl":"http://192.168.13.111/YchLrestServer/api",

var Config={

        "baseurl":"http://192.168.0.1/api",

        "sessionid":""


    }
    ;

var t;

var NavigationListDATA_wx=[
    {"title":"微信 拉取授权登录 /auth2"
        ,"desc":"微信授权登录 redirect_uri 是后台通过appid 认证的回调接口 回调成功后 auth2接口会重定向去state 的参数网址 并且加入获取到openid\n 其中appid是你微信appid redirect_uri就是本接口地址 需要在微信公众号的授权处配置该地址的域名或IP"
        ,"url":"/wx/auth2"
        ,"method":"GET"
        ,"parameters":"https:/t"
        ,"example_url":"/wx/auth2"
        ,"example_body":""
        ,"example_result":"{}"
        ,"otherurl":1

    },
];

var NavigationListDATA_car=[

        {"title":"汽车 特价车信息 /nl/car/specialcar/{model_id}"
            ,"desc":"specialcar 通过车model_id 获取特价车信息"
            ,"url":"/nl/car/specialcar/{model_id}"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/nl/car/specialcar/1263"
            ,"example_body":""
            ,"example_result":"{}"

        },
        {"title":"汽车 通过model_id查询汽车详情 /nl/car/carDetails/{model_id}"
            ,"desc":"carDetails 通过车model_id 查询汽车详情"
            ,"url":"/nl/car/carDetails/{model_id}"
            ,"method":"POST"
            ,"parameters":""
            ,"example_url":"/nl/car/carDetails/163"
            ,"example_body":""
            ,"example_result":"{}"

        }
        ,{"title":"汽车 车品牌 /nl/car/brand/list"
            ,"desc":"获取车品牌信息"

            ,"url":"/nl/car/brand/list"

            ,"method":"POST"

            ,"parameters":""

            ,"example_url":"/nl/car/brand/list"

            ,"example_body":""

            ,"example_result":"{}"
        }


    ]
    ;


var NavigationListDATA_member4s=[
    {"title":"test"
        ,"desc":"添加活动用户"

        ,"url":"https://tents/{内容}"

        ,"method":"get"

        ,"parameters":""

        ,"example_url":"hA9v5gdasdgasdgasdg"
        ,"example_body":""
        ,"example_result":"{}"
    }

];

var NavigationListDIRDATA=[
    {
        title: "微信 wx",
        list: NavigationListDATA_wx
    },
    {
        title: "汽车 Car",
        list: NavigationListDATA_car
    },
    {
        title: "4S店 Member4S",
        list: NavigationListDATA_member4s
    }

];








