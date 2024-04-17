const CategoryColor = (category) => {
    switch (category) {
        case 'Food':
            return '#ff690a';
        case 'Shopping':
            return '#40acc3';
        case 'Transport':
            return '#e2375a';
        case 'Personal Care': ;
            return '#fff3f3';
        case 'Income':
            return 'purple';
        default:
            return "black";

    }
};

export default CategoryColor;