import { getTotalBalance, getAllCategoryExpenses } from "../api";
import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import CategoryAnalysis from "./common/CategoryAnalysis";
import CategoryColor from "./common/CategoryColor";
import TopBar from "./common/TopBar";
import BottomBar from "./common/BottomBar";
const AnalysisPage = (props) => {
    const handleLogout = props.handleLogout;
    const [TotalBalance, setTotalBalance] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [pieChartData, setPieChartData] = useState([{ title: '', value: '', color: '' }]);
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

    return (
        <div>
            <TopBar banner={TotalBalance} showAmount="true" showLogOut="true" handleLogout ={handleLogout}/>
            <div className="piechart-container">
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

                />;

            </div>
            <div className="category-analysis-container">
                {categoryList.map((categoryItem) => (
                    <CategoryAnalysis icon={categoryItem.category} amount={categoryItem.amount} />

                ))}


            </div>
            <BottomBar />

        </div>
    );

}

export default AnalysisPage;