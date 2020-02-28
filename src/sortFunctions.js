
const sortByString = (stringA, stringB) => {
    if (stringA.firstName > stringB.firstName)
        return 1;
    if (stringA.firstName < stringB.firstName)
        return -1;
    return 0;
};

const sortByNumber = (numberA, numberB) => {
    return numberA - numberB;
};