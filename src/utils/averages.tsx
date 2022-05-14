export const findAverage = (arr: any, property: string) => {
    return arr.reduce((acc: any, val: any) => {
        return acc + (val[property] / arr.length);
    }, 0);
};
