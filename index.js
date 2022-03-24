const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '@#$?:!%*&/,.;[]{}()<>=_~';

const password = {
    value: "",
    length: 16,
    numbers: true,
    specialChars: true
};

const randomChar = Math.floor(Math.random() * chars.length);
password.value += chars.charAt(randomChar); // Always start the password with a letter.

for(let i = 2; i <= password.length; i++){ // $i is set to 2 because the loop starts at 0 and one char is already added just above.

    const percent = Math.floor(Math.random() * 100);
    
    const randomChar = Math.floor(Math.random() * chars.length);
    const randomNumber = Math.floor(Math.random() * numbers.length);
    const randomSpecialChars = Math.floor(Math.random() * specialChars.length);

    switch(true){

        case password.numbers && percent <= 40:
            password.value += numbers.charAt(randomNumber);
            break;

        case password.specialChars && percent > 40 && percent < 60:
            password.value += specialChars.charAt(randomSpecialChars);
            break;

        default:
            password.value += chars.charAt(randomChar);
            break;
    }
}

console.log(password.value);
