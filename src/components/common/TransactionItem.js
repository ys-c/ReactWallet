import './styles.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CategoryIcon from './CategoryIcon';
const TransactionItem = (props) => {
    const transactionDetails = props.transactionDetails;
    let category = transactionDetails.category;
    let notes = transactionDetails.notes;
    let amount = transactionDetails.amount;
    let type = transactionDetails.type;
    let date = transactionDetails.transaction_date;
    const data= {id: transactionDetails.transaction_id};
    const navigate = useNavigate();
    const goEdit = () => {
        navigate("/edittransaction", {state: data});
    }

    return (
        <div>
            <div className='transaction-item-container'>
                <div id='category-icon-container'>
                    {CategoryIcon(category)}
                </div>
                <div className='transcation-item-middle-container'>
                    <div id='date'>
                        {date}
                    </div>
                    <div id='category-name'>
                        {category}
                          </div>
                    <div id='notes'>
                        {notes}
                        </div>
                </div>
                <div className='transcation-item-right-container'>
                    <div id='amount-container'>
                        {
                            type === 'expenses' ? <div className='amount-red'>-${amount} </div> : <div className='amount-green'>+${amount} </div>
                        }
                    </div>
                    <div id='edit-button-container'>
                        <Button
                        onClick={()=>goEdit()} >
                            <img src={require('./icons/edit-button.png')} width={20} height={20} alt="edit" />
                        </Button>
                    </div>
                </div>


            </div>
        </div >
    );

}
export default TransactionItem;
