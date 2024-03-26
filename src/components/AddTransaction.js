import TopBar from "./common/TopBar";
import {useState} from 'react';
import {useNavigate } from "react-router-dom"
import {Input,Select,Option,FormControl,FormLabel, Button } from '@mui/joy';
const AddTransaction = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    
    const navigate = useNavigate();
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
                        placeholder="Amount"
                        startDecorator={'SGD$'}
                        variant="soft"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required>
                    </Input>
                    <FormLabel sx={{mt: 2}}>Category: </FormLabel>
                    <Select
                        size="lg"
                        placeholder="Select Category..."
                        variant="soft"
                        onChange={(e) => setCategory(e.target.value)}
                        required>
                        <Option value="Food"> Food</Option>
                        <Option value="Shopping"> Shopping</Option>
                        <Option value="Transport"> Transport</Option>
                        <Option value="Personal Care"> Personal Care</Option>
                        <Option value="Income"> Income</Option>
                    </Select>
                    <FormLabel sx={{mt: 2}}>Transaction Date: </FormLabel>
                    <Input
                        size="lg"
                        type="date"
                        variant="soft"
                        onChange={(e) => setDate(e.target.value)}
                        required>
                    </Input>
                    <FormLabel sx={{mt: 2}}>Transaction Notes: </FormLabel>
                    <Input
                        size="lg"
                        type="text"
                        placeholder="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        variant="soft">
                    </Input>
                </FormControl>
                <Button size="lg" variant="solid" sx={{m: 2}} >Save</Button>
                <Button size="lg" variant="solid" sx={{m: 2}} onClick={()=>goBack()}>Cancel</Button>


            </div>
        </div>
    );

}
// amount, category, notes, date 
// save button

export default AddTransaction;