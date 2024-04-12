import './styles.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const TransactionItem = (props) => {
    const transactionDetails = props.transactionDetails;
    // console.log("item:", transactionDetails);
    let category = transactionDetails.category;
    let notes = transactionDetails.notes;
    let amount = transactionDetails.amount;
    let type = transactionDetails.type;
    const navigate = useNavigate();
    const goEdit = () => {
        console.log("here");
        navigate("/edittransaction");
    }

    const categoryDisplay = (category) => {
        switch (category) {
            case 'Food':
                return <img src={require('./icons/foodicon.png')} width={75} height={75} alt="foodicon" />;
            case 'Shopping':
                return <img src={require('./icons/shoppingicon.png')} width={75} height={75} alt="shoppingicon" />;
            case 'Transport':
                return <img src={require('./icons/transporticon.png')} width={75} height={75} alt="transporticon" />;
            case 'Personal Care':
                return <img src={require('./icons/personalcareicon.png')} width={75} height={75} alt="personalcareicon" />;
            case 'Income':
                return <img src={require('./icons/salaryicon.png')} width={75} height={75} alt="salaryicon" />;
            default:
                return category;

        }
    };

    return (
        <div>
            <div className='transaction-item-container'>
                <div id='category-icon-container'>
                    {categoryDisplay(category)}
                </div>
                <div className='transcation-item-middle-container'>
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
                            type === 'expenses' ? <div className='amount-red'>-{amount} </div> : <div className='amount-green'>+{amount} </div>
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

// category photo
// category name
// notes if have
// amount

export default TransactionItem;
