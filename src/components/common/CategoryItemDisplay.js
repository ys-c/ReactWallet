import CategoryIcon from "./CategoryIcon";
import CategoryColor from "./CategoryColor";
import ColoredLine from "./ColoredLine";
const CategoryItemDisplay = (props) => {
  const category = props.icon;
  const amount = props.amount;

  return (
    <div className="category-analysis-item">
      <div id='category-icon-container'>
        {CategoryIcon(category)}
      </div>
      <div className='category-analysis-middle-container'>
        {category}
        
       <ColoredLine color={CategoryColor(category)}/>
      </div>
      <div id="amount-container">
       ${amount}
      </div>

    </div>
  )
};
export default CategoryItemDisplay;

