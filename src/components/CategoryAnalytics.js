import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import TopBar from "./common/TopBar";
import BottomBar from "./common/BottomBar";
import TransactionItem from "./common/TransactionItem";
import { getAllTransactionItem } from "../api";
const CategoryAnalytics = (props) => {
    const handleLogout = props.handleLogout;
    const location = useLocation();
    const locationData = location.state;
    const category = locationData.category;
    const [categoryAmount,setCategoryAmount] = useState(locationData.amount);
    const [TransactionList, setTransactionList] = useState([{transaction_id: '', type:'', transaction_date:'',category:'',notes:'',amount:'' }]);
    useEffect(()=>{
    getAllTransactionItem()
    .then((res)=>{
        let data = res.data;
        const FilterByCategory  = data.filter(item => item.category === category)
        setTransactionList(FilterByCategory);
        
    })
    .catch((err) => {
        console.log(err);
    })
        
    })
    return (
        <div>
            <TopBar mainBanner={"$"+categoryAmount} subBanner={category + " Expenses"} showLogOut="true" handleLogout={handleLogout} />
            <div className="middle-homepage-container">
                {TransactionList.map((transactionRecord, index) => (
                    <TransactionItem key={index} transactionDetails={transactionRecord} />
                ))}
                <BottomBar />
            </div>
        </div>
    );
}
export default CategoryAnalytics