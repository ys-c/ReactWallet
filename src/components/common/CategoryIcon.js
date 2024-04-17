const CategoryIcon = (category) => {
    switch (category) {
        case 'Food':
            return <img src={require('./icons/foodicon.png')} width={75} height={75} alt="foodicon" />;
        case 'Shopping':
            return <img src={require('./icons/shoppingicon.png')} width={75} height={75} alt="shoppingicon" />;
        case 'Transport':
            return <img src={require('./icons/transporticon.png')} width={75} height={75} alt="transporticon" />;
        case 'Personal Care':
            return <img src={require('./icons/personalcareicon.png')} width={75} height={75} alt="personalcareicon" />;
        case 'Income':
            return <img src={require('./icons/salaryicon.png')} width={75} height={75} alt="salaryicon" />;
        default:
            return category;

    }
};

export default CategoryIcon;