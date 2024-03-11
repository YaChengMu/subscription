import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  deprecatedKeys: [4],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12867875',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.8981',
            top: 'width * 0.1574',
          },
          matches: '[id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/45daad88-68a3-41b9-933a-943eeae0e4ff',
          snapshotUrls: 'https://i.gkd.li/i/14434685',
        },
      ],
    },
    {
      key: 1,
      name: '通知提示-请求推送通知弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12867853',
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          quickFind: true,
          activityIds: [
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
            'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
          ],
          matches: '[id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12867751',
            'https://i.gkd.li/i/12894813',
            'https://i.gkd.li/i/13522998',
          ],
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds: [
            'com.bbk.launcher2.Launcher',
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
          ],
          matches: [
            'ViewGroup[childCount=2] [text="广告"]',
            'ViewGroup @ViewGroup[clickable=true][childCount=1] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13346628',
            'https://i.gkd.li/i/13451304',
            'https://i.gkd.li/i/14519779',
          ],
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches: '@Image < View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13523288',
        },
        {
          key: 4,
          name: '字节广告-2',
          quickFind: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[clickable=true] > [id="com.zmzx.college.search:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12893408',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches: '[vid="close_m_image_left_text_right_app_compliance"]',
          snapshotUrls: 'https://i.gkd.li/i/13849755',
        },
        {
          key: 1,
          quickFind: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches:
            '[id^="com.zmzx.college.search:id/ad_flag_source"] - * > [id="com.zmzx.college.search:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13063381',
        },
      ],
    },
    {
      key: 5,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.zmzx.college.search:id/update_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13063373',
        'https://i.gkd.li/i/13623469',
      ],
    },
    {
      key: 6,
      name: '通知提示-申请开启推送通知弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text="开启推送通知"] - [id="com.zmzx.college.search:id/siv_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13440939',
        },
      ],
    },
    {
      key: 7,
      name: '评价提示-请求好评弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '[id="com.zmzx.college.search:id/iv_logo"] + [id="com.zmzx.college.search:id/siv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13476308',
    },
    {
      key: 8,
      name: '局部广告-教材内弹窗广告1',
      quickFind: true,
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
      snapshotUrls: ['https://i.gkd.li/i/13929945'],
    },
    {
      key: 9,
      name: '局部广告-教材内弹窗广告2',
      quickFind: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/i/13929981'],
    },
    {
      key: 10,
      name: '局部广告-教材内底部广告',
      quickFind: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      ],
      rules:
        '[id="com.zmzx.college.search:id/close_m_image_left_text_right_app_compliance"]',
      snapshotUrls: ['https://i.gkd.li/i/13929965'],
    },
  ],
});
