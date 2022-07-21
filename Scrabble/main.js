

let noteval = [1, 2, 3, 4, 5, 8, 10]
let note = ["eaionrtlsu", "dg", "bcmp", "fhvwy", "k", "jk", "qz"]

const getNote = (c) => {
    for (let index = 0; note[index]; index++)
    {
        for (let i = 0; note[index][i]; i++)
        {
            if (note[index][i] == c)
                return noteval[index];
        }
    }
    return (0);
}

let tab = [0, 0, 0, 0, 0, 0, 0, 0]
let words = [];
const N = parseInt(readline());

for (let i = 0; i < N; i++) {
    const W = readline();
    words.push(W);
}
const LETTERS = readline();

const checkAll = (string) => {
    let ret = 0;
    if (string.lenght > LETTERS.length)
        return false;
    for (let y = 0; string[y]; y++) 
    {
        for (let i = 0; LETTERS[i]; i++)
        {
            if (string[y] == LETTERS[i] && tab[i] === 0)
            {
                ret++;
                tab[i] = 1;
                break;
            }
        }
    }
    tab = [0, 0, 0, 0, 0, 0, 0, 0]
    if (ret >= string.length)
        return (true);
    else
        return (false);
}

let ind;
let val = 0;
let temp;

const calculVal = () => {
    for (let i = 0; words[i]; i++)
    {
        temp = 0;
        for (let y = 0; words[i][y]; y++)
            temp += getNote(words[i][y])
        if (checkAll(words[i]) && val < temp)
        {
            val = temp;
            ind = i; 
       }
    }
}
calculVal()

console.log(words[ind]);