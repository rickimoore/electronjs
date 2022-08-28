import {useQuery} from "@apollo/client";
import {GET_TX_GAS_DATA} from "../apollo/txGasQuery";
import {useEffect} from "react";

export type TransactionData = {
    gasPrice: string,
    gasUsed: string,
    id: string,
}

export interface TxGasQueryResults {
    transactions: TransactionData[]
}

const useTxGasQuery = () => {
    const { data, startPolling, stopPolling } = useQuery<TxGasQueryResults>(GET_TX_GAS_DATA);

    useEffect(() => {
        startPolling(15000);

        return () => {
            stopPolling()
        }
    }, []);

    return {
        data: data?.transactions
    }
}

export default useTxGasQuery;