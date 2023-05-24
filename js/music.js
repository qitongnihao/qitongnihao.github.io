const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: true,
    volum: 0.5,
	autoplay: true, //自动播放
    audio: [
    {
        name: "雨に濡れて",
        artist: '坂井泉水',
        url: 'https://upos-hz-mirrorakam.akamaized.net/upgcxcode/62/62/506436262/506436262-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1684949957&gen=playurlv2&os=akam&oi=1843279853&trid=b1a558966dfc443b9fb8973bc53861ebu&mid=595526715&platform=pc&upsig=f323acd74dc4bf2e63ed0aa255531772&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&hdnts=exp=1684949957~hmac=5672c90737495017a192d7e178230eac0488556976062a341130e9ab6d053849&bvc=vod&nettype=0&orderid=0,1&buvid=5288D4F5-DBDE-4DA3-A48E-51B5C012C779148797infoc&build=0&agrr=1&bw=39426&logo=80000000',
        cover: 'https://linshibi.com/wp-content/uploads/jk.jpg',
    },
	{
        name: "遠い日のNostalgia",
        artist: '坂井泉水',
        url: 'https://upos-hz-mirrorakam.akamaized.net/upgcxcode/07/62/195826207/195826207_nb2-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1684948170&gen=playurlv2&os=akam&oi=1843279853&trid=3311266cffbd4cec88ffa2cd4d0332fbu&mid=595526715&platform=pc&upsig=cae7c39963c96d87a1099a24b807864b&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&hdnts=exp=1684948170~hmac=cfc85e024c0466cffa9523f4c5e6aa68373b476ceecead5a68e969ac0c428276&bvc=vod&nettype=0&orderid=0,1&buvid=5288D4F5-DBDE-4DA3-A48E-51B5C012C779148797infoc&build=0&agrr=1&bw=16613&logo=80000000',
        cover: 'https://linshibi.com/wp-content/uploads/jk.jpg',
    },
    {
        name: "心を开いて",
        artist: '坂井泉水',
        url: 'https://upos-hz-mirrorakam.akamaized.net/upgcxcode/91/28/194322891/194322891-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1684949548&gen=playurlv2&os=akam&oi=1843279853&trid=78a2361ce8894ac09302b626871417b5u&mid=595526715&platform=pc&upsig=db7fb0bf9389de5aed615bb0dbb580b2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&hdnts=exp=1684949548~hmac=53d7c8a1c08c0654907273f5932bfe78bac34873c860a1d2919aabb08b409540&bvc=vod&nettype=0&orderid=0,1&buvid=5288D4F5-DBDE-4DA3-A48E-51B5C012C779148797infoc&build=0&agrr=1&bw=40294&logo=80000000',
        cover: 'https://linshibi.com/wp-content/uploads/jk.jpg',
    },
    {
        name: "二人の夏",
        artist: '坂井泉水',
        url: 'https://upos-hz-mirrorakam.akamaized.net/upgcxcode/25/89/36918925/36918925_da3-1-30232.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1684949767&gen=playurlv2&os=akam&oi=1843279853&trid=cebeecbc8ab34fb1855e1eafb8e2525fu&mid=595526715&platform=pc&upsig=d042fac9260ab3fbc8e18b8cb94376f8&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&hdnts=exp=1684949767~hmac=2889186e87c5a8c637f08a0bdcffe7a221f8682611b090a9645bdb84a1644992&bvc=vod&nettype=0&orderid=0,1&buvid=5288D4F5-DBDE-4DA3-A48E-51B5C012C779148797infoc&build=0&agrr=1&bw=16594&logo=80000000',
        cover: 'https://linshibi.com/wp-content/uploads/jk.jpg',
    },
	]
});


