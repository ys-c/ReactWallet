import { getTotalBalance, getAllCategoryExpenses } from "../api";
import {Button } from '@mui/joy';
import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useNavigate} from "react-router-dom"
import CategoryItemDisplay from "./common/CategoryItemDisplay";
import CategoryColor from "./common/CategoryColor";
import TopBar from "./common/TopBar";
import BottomBar from "./common/BottomBar";
import Spinner from 'react-bootstrap/Spinner';
const AnalysisPage = (props) => {
    const handleLogout = props.handleLogout;
    const [TotalBalance, setTotalBalance] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [pieChartData, setPieChartData] = useState([{ title: '', value: '', color: '' }]);
    const [emptyTransaction, setEmptyTransaction] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        getTotalBalance()
            .then((res) => {
                setTotalBalance(res.data)
            })
            .catch((error) => {
                console.log(error);
            });
        getAllCategoryExpenses()
            .then((res) => {
                if(res.data.length>0){
                    setEmptyTransaction(false);
                }
                setCategoryList(res.data);
                var dataArray = [];
                res.data.forEach((item) => {
                    let data = { title: '', value: '', color: '' };
                    data.title = item.category;
                    data.value = item.amount;
                    data.color = CategoryColor(item.category);
                    dataArray.push(data);
                });
                setPieChartData(dataArray);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const calculateTotalExpenses = () => {
        let expense = 0;
        categoryList.forEach((item) => {
            expense += item.amount;
        }
        );
        return expense;
    }

    const goCategoryAnalytics=(categoryName, categoryAmount) =>{

        const data= {category: categoryName, amount: categoryAmount};
        navigate("/categoryanalysis", {state: data});

    };

    return (
        <div>
            <TopBar mainBanner={"$"+TotalBalance} subBanner="Final Balance" showLogOut="true" handleLogout={handleLogout} />
            {
                emptyTransaction ?( <div className= "empty-transaction-container"> <h3>No transactions to analyse!</h3> Click the add button at the bottom to log transactions</div>) : (<div className="piechart-container">
                <div id="piechart-total-expenses">
                    Total Expenses: ${calculateTotalExpenses()}

                </div>
                <PieChart
                    data={pieChartData}
                    startAngle={90}
                    radius={37}
                    label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                    lineWidth={50}
                    labelPosition={112}
                    // onMouseOver={}
                    labelStyle={(index) => ({
                        fill: pieChartData[index].color,
                        fontSize: '5px',
                        fontFamily: 'sans-serif',
                    })}

                />

            </div>) 
            }
            
            <div className="category-analysis-container">
                {categoryList.map((categoryItem, index) => (
                    <Button key={index} variant="plain" style={{width: '100%'}} onClick={()=> goCategoryAnalytics(categoryItem.category,categoryItem.amount )}>
                    <CategoryItemDisplay key={index} icon={categoryItem.category} amount={categoryItem.amount} />
                    </Button>
                ))}


            </div>
            <BottomBar />

        </div>
    );

}

export default AnalysisPage;