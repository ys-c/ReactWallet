import TopBar from "./common/TopBar";
import BottomBar from "./common/BottomBar";
import TransactionItem from "./common/TransactionItem";
import { useEffect, useState } from "react";
import { getAllTransactionItem, getTotalBalance } from "../api";
const HomePage = (props) =>{
    const handleLogout = props.handleLogout;
    const [TransactionList, setTransactionList ] = useState([{transaction_id: '', type:'', transaction_date:'',category:'',notes:'',amount:'' }]);
    const [TotalBalance, setTotalBalance] = useState('');
    const [emptyTransaction, setEmptyTransaction]= useState(true);
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
            let data= res.data;
            if(data.length>0)
            {
                setEmptyTransaction(false);
            }
            data.sort((a,b)=> new Date(b.transaction_date)- new Date(a.transaction_date));
            setTransactionList(data);
        })
        .catch((error) =>
        {
            console.log(error);
        });
    },[]);
    


    return(
        <div>
            <TopBar mainBanner={"$"+TotalBalance} subBanner="Final Balance" showLogOut="true" handleLogout={handleLogout} />
            <div className="middle-homepage-container">
            {
                emptyTransaction ? ( <div className= "empty-transaction-container"> <h3>There are currently no transaction!</h3> Click the add button at the bottom to log transactions</div> ) : ( <div></div> )
            }
           {TransactionList.map((transactionRecord, index) => (
            <TransactionItem key={index} transactionDetails = {transactionRecord}/>
            ))}
            </div>

            <BottomBar/>
        </div>
    );

}
export default HomePage;