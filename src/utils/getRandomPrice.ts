const getRandomPrice = (): number => {
    const min: number = Math.ceil(5);
    const max: number = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomPrice;