const INCREASE_CURRENT_PAGE = 'INCREASE_CURRENT_PAGE';
const DECREASE_CURRENT_PAGE = 'DECREASE_CURRENT_PAGE';


const increasePage = () => ({ type: INCREASE_CURRENT_PAGE});
const decreasePage = () => ({ type: DECREASE_CURRENT_PAGE});

export {
    INCREASE_CURRENT_PAGE,
    DECREASE_CURRENT_PAGE,
    increasePage,
    decreasePage
};