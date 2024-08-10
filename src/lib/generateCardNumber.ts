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
        '51', '52', '53', '54', '55',
        '2221', '2222', '2223', '2224', '2225', '2226', '2227', '2228', '2229',
        '223', '224', '225', '226', '227', '228', '229',
        '23', '24', '25', '26', '270', '271', '2720'
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
