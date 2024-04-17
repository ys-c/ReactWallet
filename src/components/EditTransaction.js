import TopBar from "./common/TopBar";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Input, Select, Option, FormControl, FormLabel, Button } from '@mui/joy';

const EditTransaction = () => {
    const [transactionDetails, setTransactionDetails] = useState([{ amount: '', category: '', date: '', notes: '' }]);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit pressed");
        if (transactionDetails[0].amount === "" || transactionDetails[0].category === "" || transactionDetails[0].date === "") {
            console.log("required not fill up");
        }
        console.log(transactionDetails);

    }

    const handleFormChange = (e) => {
        let data = transactionDetails;
        console.log(e.target.name);
        console.log(e.target.value);
        data[e.target.name] = e.target.value;
        setTransactionDetails(data);

    }

    const handleSelectChange = (e, newValue) => {
        console.log("newValue", newValue);
        let data = transactionDetails;
        data["category"] = newValue;
        setTransactionDetails(data);

    };
    const goBack= ()=>{
        navigate("/home");
     }
    return (
        <div>
            <TopBar banner="Edit Transaction" showAmount="false" />
            <div className="add-transcation-container">
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
                        value={transactionDetails.amount}
                        onChange={(e) => handleFormChange(e)}
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
                        value={transactionDetails.category}
                        required>
                        <Option value="Food" onClick={(e) => handleSelectChange(e, "Food")}> Food</Option>
                        <Option value="Shopping" onClick={(e) => handleSelectChange(e, "Shopping")}> Shopping</Option>
                        <Option value="Transport" onClick={(e) => handleSelectChange(e, "Transport")}> Transport</Option>
                        <Option value="Personal Care" onClick={(e) => handleSelectChange(e, "Personal Care")}> Personal Care</Option>
                        <Option value="Income" onClick={(e) => handleSelectChange(e, "Income")}> Income</Option>
                    </Select>
                </FormControl >
                <FormControl>
                    <FormLabel sx={{ mt: 2 }}>Transaction Date: </FormLabel>
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
                    <FormLabel sx={{ mt: 2 }}>Transaction Notes: </FormLabel>
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
                <Button size="lg" variant="solid" sx={{ m: 2 }} onClick={(e) => handleSubmit(e)}>Save</Button>
                <Button size="lg" variant="solid" sx={{ m: 2 }} onClick={() => goBack()}>Cancel</Button>


            </div>
        </div>

    )
}
export default EditTransaction;