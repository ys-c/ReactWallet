import TopBar from "./common/TopBar";
import {useState} from 'react';
import {useNavigate } from "react-router-dom"
import {Input,Select,Option,FormControl,FormLabel, Button } from '@mui/joy';
import CategoryType from "./common/CategoryType";
import CategoryNameList from "./common/CategoryNameList";
import { createTransactionItem } from "../api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AddTransaction = () => {
    const [transactionDetails, setTransactionDetails] = useState([{amount:'', category:'',transaction_date:'',notes:'', type:'', username:'',transaction_id:''}]);
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(transactionDetails[0].amount === "" || transactionDetails[0].category === "" || transactionDetails[0].transaction_date === "")
        {

            if(transactionDetails[0].amount === "" )
            {
                toast.error ("Amount is required");

            }
            if(transactionDetails[0].category === "" )
            {
                toast.error ("Category is required");
                
            }
            if(transactionDetails[0].transaction_date === "" )
            {
                toast.error ("Date of transaction is required");
            }     
        }
        else{
        var type = CategoryType(transactionDetails[0].category);
        let data = transactionDetails;
        data[0]["type"] = type;
        setTransactionDetails(data);
        // console.log(transactionDetails);
        createTransactionItem(transactionDetails[0])
        .then(()=>  successCreation()
        
    )
        .catch((err) => {
            toast.error(err.response.data.message);
        });
    }
        
    }
    const successCreation =()=>
    {
        toast.success("transaction saved!!")
        navigate("/home");
    }
    
      const handleFormChange = (e) =>{
        let data = transactionDetails;
        // console.log(e.target.name );
        // console.log(e.target.value);
        data[0][e.target.name] = e.target.value;
        setTransactionDetails(data);
        
    }

    const handleSelectChange =(e,newValue) =>{
        // console.log("newValue", newValue);
        let data = transactionDetails;
        data[0]["category"] = newValue;
        setTransactionDetails(data);

}
    const goBack= ()=>{
       navigate("/home");
    }

    return (
        <div>
            <TopBar mainBanner="Add Transaction" subBanner="" showLogOut="false" />
            <div className="add-transcation-container">
                <FormControl >
                    <FormLabel sx={{mt: 1}}>Amount: </FormLabel>
                    <Input size="lg"
                        type="number"
                        slotProps={{
                            input: {
                              min: 0
                            },}}
                        name="amount"
                        placeholder="Amount"
                        startDecorator={'SGD$'}
                        variant="soft"
                        value={transactionDetails.amount}
                        onChange={(e) => handleFormChange(e)}
                        required>
                    </Input>
                    </FormControl >
                    <FormControl >
                    <FormLabel sx={{mt: 2}}>Category: </FormLabel>
                    <Select
                        size="lg"
                        placeholder="Select Category..."
                        variant="soft"
                        name="category"
                        value={transactionDetails.category}
                        required>
                        {CategoryNameList.map((categoryName)=> (
                             <Option value={categoryName} key={categoryName} onClick={(e) => handleSelectChange(e, categoryName)}> {categoryName}</Option>

                        ))}
                    </Select>
                    </FormControl >
                    <FormControl>
                    <FormLabel sx={{mt: 2}}>Transaction Date: </FormLabel>
                    <Input
                        size="lg"
                        type="date"
                        variant="soft"
                        name="transaction_date"
                        value={transactionDetails.transaction_date}
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