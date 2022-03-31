function generatePassword(Length, Lowercase, Uppercase, Numbers, SpecialChars){

    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '@#$?:!%*&/,.;[]{}()<>=_~';

    const password = {
        value: "",
        length: Length,
        lowercase: Lowercase,
        uppercase: Uppercase,
        numbers: Numbers,
        specialChars: SpecialChars
    };

    for(let i = 0; i <= password.length - 1; i++){  // "password.length -1" avoid having one more character than the length.

        while(password.value.length === i){ // 
    
            if(!password.lowercase && !password.uppercase && !password.numbers && !password.specialChars) return; 
            const chance = Math.floor(Math.random() * 100);
        
            const randomLowerChar = Math.floor(Math.random() * lowerChars.length);
            const randomUpperChar = Math.floor(Math.random() * upperChars.length);
            const randomNumber = Math.floor(Math.random() * numbers.length);
            const randomSpecialChars = Math.floor(Math.random() * specialChars.length);
            
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
    
    return password.value;
}

/* ------------------------------------------------------------------------------------ */
const passwordDisplay = document.getElementById("password");
const generateBtn = document.getElementById("btn");
const copyBtn = document.getElementById("copy");

const password = generatePassword(16, true, true, true, false);
passwordDisplay.value = password;

generateBtn.addEventListener("click", () => {

    copyBtn.textContent = "Copy";
    const passwordLength = document.getElementById("length").value;
    const passwordUppercase = document.getElementById("uppercase").checked;
    const passwordLowercase = document.getElementById("lowercase").checked;
    const passwordNumbers = document.getElementById("numbers").checked;
    const passwordSpecialChars = document.getElementById("specialChars").checked;
        
    const password = generatePassword(passwordLength, passwordLowercase, passwordUppercase, passwordNumbers, passwordSpecialChars);
    
    if(!password){
        passwordDisplay.value = "Please select at least one character type.";
        copyBtn.disabled = true;
    }else{
        passwordDisplay.value = password;
    }
});

copyBtn.addEventListener("click", () => {

    passwordDisplay.select();
    navigator.clipboard.writeText(passwordDisplay.value);
    passwordDisplay.blur();
    copyBtn.textContent = "Copied!";
});
