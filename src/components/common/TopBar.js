import './styles.css'
const TopBar = (props) => {
    const banner= props.banner;
    return(
        <div className="top-bar">
            <h1>{banner}</h1>
        </div>

    );
}
export default TopBar;