import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import { RawSubscription } from '@gkd-kit/api';

const subsConfig: RawSubscription = {
  id: 303,
  version: 0,
  name: 'YaChengMu的GKD订阅',
  author: 'YaChengMu',
  supportUri: 'https://github.com/YaChengMu/subscription',
  updateUrl:
    'https://raw.gitmirror.com/YaChengMu/subscription/main/dist/gkd.json5',
  checkUpdateUrl:
    'https://raw.gitmirror.com/YaChengMu/subscription/main/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
