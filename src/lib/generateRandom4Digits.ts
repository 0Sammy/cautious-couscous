// Generate a random 4-digit number
export const generateOTPNumber = (): number => {
    return Math.floor(1000 + Math.random() * 9000);
};
  