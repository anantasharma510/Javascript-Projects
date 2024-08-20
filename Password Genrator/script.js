const passwordBox = document.getElementById("passwordBox");
const length = 12;
const upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(','); 
const lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(',');
const numbers = "1,2,3,4,5,6,7,8,9,0".split(',');
const symbols = "!@#$%^&*()_+-=[]{};:,'\"".split('');
const allChars = upperCase.concat(lowerCase, numbers, symbols);

function createPassword() {
    let password = "";
    // Ensure the password includes at least one character from each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the rest of the password length with random characters
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Set the password to the input field
    passwordBox.value = password;
}

function copyPassword() {
    // Select the text in the input field
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            console.log('Password copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
        });
}
