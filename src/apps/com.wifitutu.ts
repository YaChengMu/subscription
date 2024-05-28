import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wifitutu',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 1,
      name: '局部广告-首页-WiFi列表广告',
      activityIds: ['com.wifitutu.ui.main.MainActivity'],
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: 'View < [desc^="dislike"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13233916',
        },
        {
          key: 1,
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13234048',
        },
        {
          preKeys: [0, 1],
          actionDelay: 1000,
          key: 99,
          matches: '[text="不感兴趣"] < @LinearLayout',
          snapshotUrls: ['https://i.gkd.li/i/15466659'],
        },
      ],
    },
  ],
});
