// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Staff, Team, Coach, Personal, Activity, Athlete } = initSchema(schema);

export {
  Staff,
  Team,
  Coach,
  Personal,
  Activity,
  Athlete
};