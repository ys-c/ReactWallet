import TopBar from "./common/TopBar";
import BottomBar from "./common/BottomBar";
import TransactionItem from "./common/TransactionItem";
const HomePage = () =>{
    return(
        <div>
            
            <TopBar banner="$$ value"/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            

            <BottomBar/>
        </div>
    );

}
export default HomePage;