import {gql} from "@apollo/client";

export const GET_TX_GAS_DATA = gql`
    query getTxData {
        transactions(orderBy: timestamp, orderDirection: desc, first: 1000) {
            id,
            gasPrice,
            gasUsed
        }
    }
`