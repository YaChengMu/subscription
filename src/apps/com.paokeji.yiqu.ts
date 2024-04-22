import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/i/14339122',
        },
        {
          key: 1,
          actionCdKey: 0,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳过"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
          snapshotUrls: 'https://i.gkd.li/i/14595457',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
        'com.aster.comic.app.view.MainActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
      ],
      rules: [
        {
          key: 0,
          name: '跳过',
          matches: '[text*="跳过"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6f12fd12-b956-474a-834c-8ebba00efbff',
          snapshotUrls: ['https://i.gkd.li/i/14362119'],
        },
        {
          key: 1,
          name: '腾讯SDK',
          actionDelay: 350, //防误触
          matches:
            '[id="android:id/content"] >(-n+4) FrameLayout > FrameLayout[childCount=1] > ImageView[index=0&&id=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830354',
            'https://i.gkd.li/i/13842716',
            'https://i.gkd.li/i/13842966',
          ],
        },
        {
          key: 2,
          name: '穿山甲SDK',
          matches: [
            'Image[text=""] < @View +4 [text="反馈"] + * >2 [text="广告"]',
            '@View[width>=75&&width<=81] > Image',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13810150',
            'https://i.gkd.li/i/13830798',
            'https://i.gkd.li/i/13809578',
            'https://i.gkd.li/i/13809737',
            'https://i.gkd.li/i/14717730',
          ],
        },
        {
          key: 3,
          matches:
            '[id*="/ksad_container"] < * >n ViewGroup[index=2] >n @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13829312',
            'https://i.gkd.li/i/14584695',
            'https://i.gkd.li/i/14340200',
          ],
        },
        {
          key: 4,
          quickFind: true,
          matches: '@LinearLayout[clickable=true] - * > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/14847142',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击"暂不"',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[id="com.paokeji.yiqu:id/btnCancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522',
          snapshotUrls: 'https://i.gkd.li/i/14140265',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-看视频解锁任意读',
      rules: [
        {
          key: 0,
          name: '看视频解锁任意读',
          activityIds: 'com.aster.comic.app.view.reader.ReaderActivity',
          matches:
            'TextView[text="看视频解锁任意读"] < LinearLayout +3 LinearLayout > @Button[id="com.paokeji.yiqu:id/btnLook"]',
          snapshotUrls: ['https://i.gkd.li/i/14584512'],
        },
        {
          preKeys: [0],
          key: 1,
          name: '看视频解锁任意读-广告',
          matches: '@ImageView[width>30&&width<40]',
          snapshotUrls: ['https://i.gkd.li/i/14584512'],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-漫画页链接断开提示',
      desc: '点击[点我重试]',
      actionMaximum: 3,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.aster.comic.app.view.reader.ReaderActivity',
          matches: '@[clickable=true] > [text="点我重试"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d71c73bb-289f-4205-a253-fcd8bd32f196',
          snapshotUrls: 'https://i.gkd.li/i/14572053',
        },
      ],
    },
  ],
});
