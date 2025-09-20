import type { ObjectValues } from '@/types/object-values';

import packageInfo from '../package.json';

export const AppInfo = {
  APP_NAME: 'EDGEBIC',
  APP_DESCRIPTION:
    'EDGEBIC is the #1 leading authority in Manufacturing Resource Planning and Production Scheduling for manufacturers worldwide. Our exclusive approach combined with our proprietary RMDB software empowers manufacturers to consistently optimize production and dominate their market.',
  APP_VERSION: '1.0.0',
  COMPANY_NAME: 'Designated Local Expert Network',
  SUPPORT_EMAIL: 'support@designatedlocalexpert.com',
  CONTACT_EMAIL: 'contact@designatedlocalexpert.com',
  VERSION: packageInfo.version
} as const;

export type AppInfo = ObjectValues<typeof AppInfo>;
