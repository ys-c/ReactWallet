import TopBar from "./common/TopBar";
import BottomBar from "./common/BottomBar";
import TransactionItem from "./common/TransactionItem";
import { useEffect, useState } from "react";
import { getAllTransactionItem, getTotalBalance } from "../api";
const HomePage = () =>{
    const [TransactionList, setTransactionList ] = useState([{transaction_id: '', type:'', transaction_date:'',category:'',notes:'',amount:'' }]);
    const [TotalBalance, setTotalBalance] = useState('');
    useEffect(() => {
        getTotalBalance()
        .then((res) => {
            setTotalBalance(res.data);
        })
        .catch((error) => 
        {
            console.log(error);
        });
        getAllTransactionItem()
        .then((res) => {
            setTransactionList(res.data);
        })
        .catch((error) =>
        {
            console.log(error);
        });
    },[]);
    


    return(
        <div>
            <TopBar banner={TotalBalance} showAmount="true"/>
            {TransactionList.map((transactionRecord) => (
            <TransactionItem transactionDetails = {transactionRecord}/>
            ))}
            

            <BottomBar/>
        </div>
    );

}
export default HomePage;