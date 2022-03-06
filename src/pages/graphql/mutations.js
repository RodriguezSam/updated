/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAthlete = /* GraphQL */ `
  mutation CreateAthlete(
    $input: CreateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    createAthlete(input: $input, condition: $condition) {
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
export const updateAthlete = /* GraphQL */ `
  mutation UpdateAthlete(
    $input: UpdateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    updateAthlete(input: $input, condition: $condition) {
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
export const deleteAthlete = /* GraphQL */ `
  mutation DeleteAthlete(
    $input: DeleteAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    deleteAthlete(input: $input, condition: $condition) {
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
