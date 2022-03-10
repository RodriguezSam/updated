import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StaffMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CoachMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PersonalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActivityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AthleteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Staff {
  readonly id: string;
  readonly email?: string;
  readonly team_id?: string;
  readonly gender?: string;
  readonly phone_number?: string;
  readonly date_of_birth?: string;
  readonly full_name?: string;
  readonly Teams?: (Team | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Staff, StaffMetaData>);
  static copyOf(source: Staff, mutator: (draft: MutableModel<Staff, StaffMetaData>) => MutableModel<Staff, StaffMetaData> | void): Staff;
}

export declare class Team {
  readonly id: string;
  readonly coach_id?: string;
  readonly team_name?: string;
  readonly staffID: string;
  readonly coachID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team, TeamMetaData>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

export declare class Coach {
  readonly id: string;
  readonly email?: string;
  readonly team_id?: string;
  readonly gender?: string;
  readonly phone_number?: string;
  readonly date_of_birth?: string;
  readonly full_name?: string;
  readonly Team?: (Team | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Coach, CoachMetaData>);
  static copyOf(source: Coach, mutator: (draft: MutableModel<Coach, CoachMetaData>) => MutableModel<Coach, CoachMetaData> | void): Coach;
}

export declare class Personal {
  readonly id: string;
  readonly stress_level?: number;
  readonly emotional_level?: number;
  readonly fatigue_level?: number;
  readonly health_level?: number;
  readonly injury_notes?: string;
  readonly activity_notes?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Personal, PersonalMetaData>);
  static copyOf(source: Personal, mutator: (draft: MutableModel<Personal, PersonalMetaData>) => MutableModel<Personal, PersonalMetaData> | void): Personal;
}

export declare class Activity {
  readonly id: string;
  readonly steps?: number;
  readonly sleep_hours?: number;
  readonly mileage?: number;
  readonly avg_pace?: number;
  readonly vertical_gain?: number;
  readonly total_time?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Activity, ActivityMetaData>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity, ActivityMetaData>) => MutableModel<Activity, ActivityMetaData> | void): Activity;
}

export declare class Athlete {
  readonly id: string;
  readonly email?: string;
  readonly team_id: string;
  readonly gender?: string;
  readonly phone_number?: string;
  readonly date_of_birth?: string;
  readonly full_name?: string;
  readonly Personal?: Personal;
  readonly Activity?: Activity;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly athletePersonalId?: string;
  readonly athleteActivityId?: string;
  constructor(init: ModelInit<Athlete, AthleteMetaData>);
  static copyOf(source: Athlete, mutator: (draft: MutableModel<Athlete, AthleteMetaData>) => MutableModel<Athlete, AthleteMetaData> | void): Athlete;
}