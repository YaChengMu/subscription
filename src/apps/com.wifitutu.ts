import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wifitutu',
  name: 'WiFi万能钥匙',
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
          snapshotUrls: 'https://i.gkd.li/i/14340351',
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-首页-WiFi列表广告',
      activityIds: ['com.wifitutu.ui.main.MainActivity'],
      rules: [
        {
          matches: 'FrameLayout[desc*="close-fill:"]',
          snapshotUrls: 'https://i.gkd.li/i/14340258',
        },
        {
          matches:
            'FrameLayout[id="com.wifitutu:id/ad_part"] >10 View[childCount=2] > View[index=0]',
          snapshotUrls: 'https://i.gkd.li/i/14340306',
        },
        {
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14340276',
        },
      ],
    },
  ],
});
