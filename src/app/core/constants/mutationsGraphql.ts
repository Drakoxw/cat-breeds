import { gql } from 'apollo-angular';

export const DROP_DATA_BASE_MUTATION = gql`
mutation {
	response: resetDataBase {
		message
	}
}
`
