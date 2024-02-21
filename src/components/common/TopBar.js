import './styles.css'
const TopBar = (props) => {
    const banner= props.banner;
    return(
        <div className="header">
            <h1>{banner}</h1>
        </div>

    );
}
export default TopBar;