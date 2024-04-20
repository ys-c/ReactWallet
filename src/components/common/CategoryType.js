const CategoryType =(category)=>{
    switch (category) {
        case 'Food':
            return "expenses";
        case 'Shopping':
            return "expenses";
        case 'Transport':
            return "expenses";
        case 'Personal Care':
            return "expenses";
        case 'Income':
            return "income";
        default:
            return category;
    }
};

export default CategoryType;