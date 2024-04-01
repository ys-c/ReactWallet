import TopBar from "./common/TopBar";
import BottomBar from "./common/BottomBar";
import TransactionItem from "./common/TransactionItem";
import { useEffect, useState } from "react";
import { getAllTransactionItem } from "../api";
const HomePage = () =>{
    const [TransactionList, setTransactionList ] = useState([{transaction_id: '', type:'', transaction_date:'',category:'',notes:'',amount:'' }]);
    useEffect(() => {
        console.log("useEffect Ran");
        getAllTransactionItem()
        .then((res) => {
            setTransactionList(res.data);
            console.log("list", TransactionList);
        })
        .catch((error) =>
        {
            console.log(error);
        });
    },[]);
    


    return(
        <div>
            <TopBar banner="$$ value"/>
            {TransactionList.map((transactionRecord) => (
            <TransactionItem transactionDetails = {transactionRecord}/>
            ))}
            

            <BottomBar/>
        </div>
    );

}
export default HomePage;