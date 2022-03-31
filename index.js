const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '@#$?:!%*&/,.;[]{}()<>=_~';

const password = {
    value: "",
    length: 16,
    lowercase: true,
    uppercase: true,
    numbers: true,
    specialChars: false
};

for(let i = 0; i <= password.length - 1; i++){  // "password.length -1" avoid having one more character than the length.

    while(password.value.length === i){ // 

        const chance = Math.floor(Math.random() * 100);
    
        const randomLowerChar = Math.floor(Math.random() * lowerChars.length);
        const randomUpperChar = Math.floor(Math.random() * upperChars.length);
        const randomNumber = Math.floor(Math.random() * numbers.length);
        const randomSpecialChars = Math.floor(Math.random() * specialChars.length);
        
        console.log("chance: "+ chance);
        console.log("----------------------------------");
        console.log(`[${i}] Random LowerChar: ${randomLowerChar}`);
        console.log(`[${i}] Random UpperChar: ${randomUpperChar}`);
        console.log(`[${i}] Random Number: ${randomNumber}`);
        console.log(`[${i}] Random SpecialChar: ${randomSpecialChars}`);
        console.log("----------------------------------");
        
        switch(true){

            case password.uppercase && chance <= 30:
                password.value += upperChars[randomUpperChar];
                break;
        
            case password.lowercase && chance > 30 && chance <= 60:
                password.value += lowerChars[randomLowerChar];
                break;
        
            case password.numbers && chance > 60 && chance <= 80:
                password.value += numbers[randomNumber];
                break;
        
            case password.specialChars && chance > 80:
                password.value += specialChars[randomSpecialChars];
                break;
        }
    }
}

console.log("your generated password is: " + password.value);
