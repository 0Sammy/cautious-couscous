function generateLuhnCheckDigit(number: string | any[]) {
    let sum = 0;
    let shouldDouble = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (sum * 9) % 10;
}


export function generateFakeMastercardNumber() {
    const prefixes = [
        '2720', '51', '53', '2225', '228', '225',
        '2221', '2222', '2223', '2224', '54', '2226', '2227', '2228', '2229',
        '223', '224', '55', '226', '227', '229', '52',
        '23', '24', '25', '26', '270', '271'
    ];

    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    let number = prefix;

    while (number.length < 15) {
        number += Math.floor(Math.random() * 10).toString();
    }

    return number + generateLuhnCheckDigit(number);
}

export function formatCardNumber(cardNumber: string) {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
}

export function generateRandomThreeDigits() {
    return Math.floor(100 + Math.random() * 900);
}

export function getExpiryTime(cardDate: Date) {

    // Parse the createdAt string into a Date object
    const date = new Date(cardDate);

    // Extract the month (getMonth returns 0-based month, so we add 1)
    let month: number = date.getMonth() + 1;

    // Ensure month is 2 digits
    let formattedMonth = month < 10 ? `0${month}` : `${month}`;

    // Extract the year and add 3 years
    let year: number = date.getFullYear() + 3;
    let formattedYear = year.toString().slice(-2);

    // Format the final date as MM/YY
    return`${formattedMonth}/${formattedYear}`;
}
