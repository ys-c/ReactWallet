import './styles.css'
const TopBar = (props) => {
    const banner= props.banner;
    const showAmount = props.showAmount;
    return(
        <div className="top-bar">
            {
                showAmount === 'true' ?  <h2> Final Balance: </h2> : ""
            }
            <h1>{banner}</h1>
        </div>

    );
}
export default TopBar;