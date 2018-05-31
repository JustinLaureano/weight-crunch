// Get Current User Weight

export default (weight) => {
    const currentWeight = weight.weightHistory.slice().sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    }).reverse().pop().weight;

    return {
        weight: currentWeight
    };
};