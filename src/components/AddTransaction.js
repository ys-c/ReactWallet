import TopBar from "./common/TopBar";
import {useState} from 'react';
import {useNavigate } from "react-router-dom"
import {Input,Select,Option,FormControl,FormLabel, Button } from '@mui/joy';
import { createTransactionItem } from "../api";
const AddTransaction = () => {
    const [transactionDetails, setTransactionDetails] = useState([{amount:'', type:'', category:'test',date:'',notes:'' }]);
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submit pressed"); 
        console.log(transactionDetails);
    }
    
      const handleFormChange = (e) =>{
        let data = transactionDetails;
        console.log(e.target.value);
        data[e.target.name] = e.target.value;
        setTransactionDetails(data);
        
    }
    
    const goBack= ()=>{
       navigate("/home");
    }
    return (
        <div>
            <TopBar banner="Add Transaction" />
            <div className="add-transcation-container">
                <FormControl >
                    <FormLabel sx={{mt: 1}}>Amount: </FormLabel>
                    <Input size="lg"
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        startDecorator={'SGD$'}
                        variant="soft"
                        value={transactionDetails.amount}
                        onChange={(e) => handleFormChange(e)}
                        required>
                    </Input>
                    </FormControl >
                    <FormControl>
                    <FormLabel sx={{mt: 2}}>Category: </FormLabel>
                    <Select
                        size="lg"
                        placeholder="Select Category..."
                        variant="soft"
                        name="category"
                        value={transactionDetails.category}
                        onChange={(e) => handleFormChange(e)}
                        required>
                        <Option value="Food"> Food</Option>
                        <Option value="Shopping"> Shopping</Option>
                        <Option value="Transport"> Transport</Option>
                        <Option value="Personal Care"> Personal Care</Option>
                        <Option value="Income"> Income</Option>
                    </Select>
                    </FormControl>
                    <FormControl>
                    <FormLabel sx={{mt: 2}}>Transaction Date: </FormLabel>
                    <Input
                        size="lg"
                        type="date"
                        variant="soft"
                        name="date"
                        value={transactionDetails.date}
                        onChange={(e) => handleFormChange(e)}
                        required>
                    </Input>
                    </FormControl>
                    <FormControl>
                    <FormLabel sx={{mt: 2}}>Transaction Notes: </FormLabel>
                    <Input
                        size="lg"
                        type="text"
                        placeholder="notes"
                        name="notes"
                        value={transactionDetails.notes}
                        onChange={(e) => handleFormChange(e)}
                        variant="soft">
                    </Input>
                </FormControl>
                <Button size="lg" variant="solid" sx={{m: 2}} onClick={(e)=>handleSubmit(e)}>Save</Button>
                <Button size="lg" variant="solid" sx={{m: 2}} onClick={()=>goBack()}>Cancel</Button>


            </div>
        </div>
    );

}
// amount, category, notes, date 
// save button

export default AddTransaction;