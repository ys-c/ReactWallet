import { Category } from '@mui/icons-material';
import './styles.css'
const TransactionItem = () => {
    let Category = "food"
    let notes= "Chicken rice"
    let amount= "3.00"
    let type= "m"
    return (
        <div>
            <div className='transaction-item-container'>
                <div id='category-icon'>category icon </div>
                <div className='transcation-item-inner-container'>
                    <div id='category-name'>category name </div>
                    <div id='notes'>notes</div>
                </div>
                <div id='amount'>Transaction amount </div>
            </div>
        </div>
    );

}

// category photo
// category name
// notes if have
// amount

export default TransactionItem;
