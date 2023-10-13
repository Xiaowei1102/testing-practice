function caesarCipher(string, shift) {
    let result = "";
    for (let char of string) {
        //if it's not a letter
        if (!(/[a-zA-Z]/).test(char)) {
            result += char;
            //need to exit current loop
            continue;
        }
        //javascript char calculation...ugh
        if (char === char.toUpperCase()) {
            const diffFromA = (char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26;
            result += String.fromCharCode('A'.charCodeAt(0) + diffFromA);
        }
        if (char === char.toLowerCase()) {
            const diffFromLowA = (char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26;
            result += String.fromCharCode('a'.charCodeAt(0) + diffFromLowA);
        }
    }
    return result;
}

//console.log(caesarCipher("!", 2));

export {caesarCipher};