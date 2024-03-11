import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.aster.comic.app.ad.view.mediation.MediationSplashAdActivity',
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/i/14339122',
        },
        {
          key: 1,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳过"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          actionDelay: 350, //防误触
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches:
            '[id="android:id/content"] >(-n+4) FrameLayout > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13830354',
            'https://i.gkd.li/i/13842716',
            'https://i.gkd.li/i/13842966',
          ],
        },
        {
          key: 1,
          name: '字节SDK-1',
          matches: 'FrameLayout[desc*="close"] > View',
          snapshotUrls: [
            'https://i.gkd.li/i/13839432',
            'https://i.gkd.li/i/13839519',
          ],
        },
        {
          key: 2,
          name: '字节SDK-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
          snapshotUrls: ['https://i.gkd.li/i/13810767'],
        },
        {
          key: 3,
          name: '字节SDK-3',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'View[width<100] > Image[width<40]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830798',
            'https://i.gkd.li/i/13810150',
            'https://i.gkd.li/i/13809737',
            'https://i.gkd.li/i/13809578',
          ],
        },
        {
          key: 4,
          name: '字节SDK-4',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text*="跳过" && text.length<=6] <2 @View -(3-n) View < View',
          snapshotUrls: ['https://i.gkd.li/i/13829749'],
        },
        {
          key: 5,
          name: '字节SDK-5',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches: ['[text*="跳过"] <n *[clickable=true]'],
          snapshotUrls: ['https://i.gkd.li/i/13809629'],
        },
        {
          key: 6,
          name: '快手SDK-1',
          matches: [
            '[vid="ksad_video_container"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView',
          ],
          snapshotUrls: ['https://i.gkd.li/i/13829312'],
        },
        {
          key: 7,
          name: '快手SDK-2',
          matches: ['[vid="ksad_auto_close_btn"]'],
          snapshotUrls: ['https://i.gkd.li/i/13837855'],
        },
        {
          key: 8,
          name: '快手SDK-3',
          activityIds: [
            'com.aster.comic.app.view.MainActivity',
            'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
          ],
          matches: [
            'FrameLayout[id="com.paokeji.yiqu:id/ksad_tk_view"] >4 ViewGroup[childCount=0] - ViewGroup >2 ViewGroup[childCount=1] >2 ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13984949',
            'https://i.gkd.li/i/14340200',
          ],
        },
      ],
    },
  ],
});
