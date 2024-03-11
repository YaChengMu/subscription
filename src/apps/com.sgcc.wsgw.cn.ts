import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 1,
      name: '分段广告-首页弹窗广告',
      activityIds: [
        'com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity',
        'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
      ],
      rules: [
        {
          key: 1,
          actionCd: 2000,
          quickFind: true,
          matches: '@[focusable=true] + [text="今日不再出现"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12745042',
            'https://i.gkd.li/i/13247655',
          ],
        },
        {
          preKeys: 1,
          key: 2,
          actionDelay: 300, //测试时没有delay点击失效
          matches:
            'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13247655',
            'https://i.gkd.li/i/13247655',
          ],
        },
        {
          preKeys: 1,
          key: 3,
          actionDelay: 300,
          quickFind: true,
          matches:
            '[id="com.sgcc.wsgw.cn:id/news_remind_laytout"] >n [id="com.sgcc.wsgw.cn:id/btn_remind_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12745042'],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@ImageView < ViewGroup -3 [text="有新版本啦!"]',
      snapshotUrls: 'https://i.gkd.li/i/13501638',
    },
    {
      key: 3,
      quickFind: true,
      name: '功能类-自动签到',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
          matches:
            'FrameLayout[id="com.sgcc.wsgw.cn:id/rn_frame"] >16 TextView[text="签到"]',
          snapshotUrls: 'https://i.gkd.li/import/14352901',
        },
        {
          preKeys: 0,
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches: 'TextView[text="签到成功"] +3 View > @Image',
          snapshotUrls: 'https://i.gkd.li/import/14352908',
        },
      ],
    },
  ],
});
