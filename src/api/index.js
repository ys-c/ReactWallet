import axios from "axios";
import { SERVER_DOMAIN } from "../config";

const TRANSACTION_ITEM_ENDPOINT = `${SERVER_DOMAIN}/transaction_item`;

export const getAllTransactionItem = () =>
axios.get(TRANSACTION_ITEM_ENDPOINT);

export const createTransactionItem = (payload) =>
axios.post(TRANSACTION_ITEM_ENDPOINT, payload);

export const updateTransactionItemById = (transaction_id , payload ) =>
axios.put(`${TRANSACTION_ITEM_ENDPOINT}/${transaction_id}`, payload);


export const deleteTransactionItembyId = (transaction_id ) =>
axios.put(`${TRANSACTION_ITEM_ENDPOINT}/${transaction_id}`);