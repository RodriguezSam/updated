/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAthlete = /* GraphQL */ `
  query GetAthlete($id: ID!) {
    getAthlete(id: $id) {
      id
      email
      team_id
      gender
      phone_number
      date_of_birth
      full_name
      createdAt
      updatedAt
    }
  }
`;
export const listAthletes = /* GraphQL */ `
  query ListAthletes(
    $filter: ModelAthleteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        team_id
        gender
        phone_number
        date_of_birth
        full_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
