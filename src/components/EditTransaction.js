import TopBar from "./common/TopBar";
import { useState, useEffect } from 'react';
import { useNavigate, useLocation} from "react-router-dom"
import { Input, Select, Option, FormControl, FormLabel, Button } from '@mui/joy';
import CategoryType from "./common/CategoryType";
import CategoryNameList from "./common/CategoryNameList";
import {deleteTransactionItembyId, getTransactionItemById, updateTransactionItemById} from '../api';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const EditTransaction = () => {
    const location = useLocation();
    const data = location.state;
    const transactionID = data.id;
    const [transactionDetails, setTransactionDetails] = useState([{transaction_id: '', type:'', transaction_date:'',category:'',notes:'',amount:'',username:'' }]);
    const [transactionAmount, setTransactionAmount] = useState([]);
    const [transactionCategory, setTransactionCategory] = useState([]);
    const [transactionDate, setTransactionDate] = useState([]);
    const [transactionNotes, setTransactionNotes] = useState([]);
   
    
    const navigate = useNavigate();
    useEffect(()=>{
        getTransactionItemById(transactionID)
        .then((res)=>{
            setTransactionDetails(res.data);
            setTransactionAmount(res.data.amount);
            setTransactionCategory(res.data.category);
            setTransactionDate(res.data.transaction_date);
            setTransactionNotes(res.data.notes);
            
        })
        .catch((error)=>{
            console.log(error);
        });

    },[]);

    const handleAmountFormChange = (e) => {
        setTransactionAmount(e.target.value);
    }
    const handleAmountDateChange = (e) => {
        setTransactionDate(e.target.value);
    }
    const handleAmountNotesChange = (e) => {
        setTransactionNotes(e.target.value);
    }

    const handleSelectChange = (e, newValue) => {
        setTransactionCategory(newValue);

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submit pressed");
        if(transactionAmount === "" || transactionDate === "")
        {

            if(transactionAmount === "" )
            {
                toast.error ("Amount is required");

            }
            if(transactionDate === "" )
            {
                toast.error ("Date of transaction is required");
            }     
        }
        else{
            var type = CategoryType(transactionCategory);
            let data= transactionDetails;
            data["amount"] = transactionAmount;
            data["category"] = transactionCategory;
            data["transaction_date"] = transactionDate;
            data["notes"] = transactionNotes;
            data["type"] = type;
            setTransactionDetails(data);
            updateTransactionItemById(transactionID, transactionDetails)
            .then(()=>  successUpdate()
    )
        .catch((err) => {
            toast.error(err.response.data.message);
        });
        }
        
    };

    const handleDelete =()=>{
        deleteTransactionItembyId(transactionID)
        .then(()=>  successDeletion()
        
    )
        .catch((err) => {
            toast.error(err.response.data.message);
        });
    };
    
     const successDeletion =()=>
    {
        toast.success("transaction deleted")
        navigate("/home");
    }
    const successUpdate =()=>
    {
        toast.success("transaction updated")
        navigate("/home");
    }
    const goBack= ()=>{
        navigate("/home");
     }


    return (
        <div>
            <TopBar mainBanner="Edit Transaction" subBanner="" showLogOut="false" />
            <div className="edit-transcation-container">
                <FormControl >
                    <FormLabel sx={{ mt: 1 }}>Amount: </FormLabel>
                    <Input size="lg"
                        type="number"
                        slotProps={{
                            input: {
                                min: 0
                            },
                        }}
                        name="amount"
                        placeholder="Amount"
                        startDecorator={'SGD$'}
                        variant="soft"
                        value={transactionAmount}
                        onChange={(e) => handleAmountFormChange(e)}
                        required>
                    </Input>
                </FormControl >
                <FormControl >
                    <FormLabel sx={{ mt: 2 }}>Category: </FormLabel>
                    <Select
                        size="lg"
                        placeholder="Select Category..."
                        variant="soft"
                        name="category"
                        value={transactionCategory}
                        required>
                       {CategoryNameList.map((categoryName)=> (
                             <Option value={categoryName} key={categoryName} onClick={(e) => handleSelectChange(e, categoryName)}> {categoryName}</Option>

                        ))}
                    </Select>
                </FormControl >
                <FormControl>
                    <FormLabel sx={{ mt: 2 }}>Transaction Date: </FormLabel>
                    <Input
                        size="lg"
                        type="date"
                        variant="soft"
                        name="date"
                        value={transactionDate}
                        onChange={(e) => handleAmountDateChange(e)}
                        required>
                    </Input>
                </FormControl>
                <FormControl>
                    <FormLabel sx={{ mt: 2 }}>Transaction Notes: </FormLabel>
                    <Input
                        size="lg"
                        type="text"
                        placeholder="notes"
                        name="notes"
                        value={transactionNotes}
                        onChange={(e) => handleAmountNotesChange(e)}
                        variant="soft">
                    </Input>
                </FormControl>
                <Button size="lg" variant="solid" color="danger" sx={{ marginTop:2, marginBottom: 1 }} onClick={() => handleDelete()}>Delete</Button>
                <div>
                <Button size="lg" variant="solid" sx={{ marginRight: 1 }} onClick={(e) => handleSubmit(e)}>Save</Button>
                <Button size="lg" variant="solid" sx={{ marginLeft: 1 }} onClick={() => goBack()}>Cancel</Button>
                </div>
                


            </div>
        </div>

    )
}
export default EditTransaction;