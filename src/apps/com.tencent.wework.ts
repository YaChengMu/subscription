import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.wework',
  name: '企业微信',
  groups: [
    {
      // 节点id疑似随机生成,尽量不用id属性
      key: 1,
      name: '功能类-自动抢红包',
      desc: '自己发的红包不抢',
      rules: [
        {
          key: 0,
          quickFind: true,
          name: '点击别人发的红包',
          activityIds: [
            'com.tencent.wework.msg.controller.MessageListActivity',
            'com.tencent.wework.msg.controller.ExternalContactMessageListActivity',
          ],
          matches:
            'RelativeLayout >2 ImageView + RelativeLayout >4 @TextView[text="红包"][id!=null] < RelativeLayout - LinearLayout > LinearLayout[childCount=1]',
          exampleUrls:
            'https://m.gkd.li/57941037/64bdd899-9a30-4816-bafc-a9e2a0d09ec6',
          snapshotUrls: [
            'https://i.gkd.li/i/14151095',
            'https://i.gkd.li/i/14151131', // 已领取的红包、自己的红包
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '开红包',
          activityIds: [
            'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeCollectorActivity',
            'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeCollectorWithCoverActivity',
          ],
          matches: 'FrameLayout + RelativeLayout + ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/52525cdb-0746-483c-b1ba-2282f3a8b8ed',
          snapshotUrls: [
            'https://i.gkd.li/i/14151108',
            'https://i.gkd.li/i/14151215',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          name: '从金额页面返回到聊天页面',
          activityIds: [
            'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeDetailActivity',
            'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeDetailWithCoverActivity',
          ],
          matches: 'LinearLayout[childCount=1] > RelativeLayout > TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/2a69cf93-1d10-48c4-8456-663197c6feca',
          snapshotUrls: 'https://i.gkd.li/i/14151120',
        },
      ],
    },
  ],
});
