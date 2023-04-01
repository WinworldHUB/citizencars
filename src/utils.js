
export const ONE_LAC = 100000;
export const ONE_CR = 10000000;

export const getCurrency = (value) => {
    if (value) {

        if (value < ONE_CR)
            return `${value / ONE_LAC} lacs`;
        else
            return `1 Cr`;
    }

    return '';
}