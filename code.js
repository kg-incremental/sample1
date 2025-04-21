

function removeAllChar(str,ch){
    // let result = '';
    // for(let i = 0; i < str.length; i++){
    //     if(str[i] !== ch){
    //         result += str[i];
    //     }
    // }
    // return result;
    return str.split(ch).join('');
}

function replaceAllChar(str,ch,ch2){
    // let result = '';
    // for(let i = 0; i < str.length; i++){
    //     if(str[i] !== ch){
    //         result += str[i];
    //     }
    //     else{
    //         result += ch2;
    //     }
    // }
    // return result;
    return str.split(ch).join(ch2);
}

function sortArray(arr){
    return arr.sort((a,b)=>a.length-b.length);

    // return arr.sort((a,b)=>b.length-a.length);

}

function removeDuplicate(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
}

function longestWord(arr){
    if(arr.length === 0) return null;
    return arr.reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr;
      });
      
}
function sumByReduce(arr){
    return arr.reduce((acc, curr) => {
        console.log(acc, curr);
        return acc + curr;
    });
}

function expandString(str){
    let answer = ''
    if(str.length %2 !== 0) throw new Error('Invalid input');
    for(let i =1; i<str.length; i=i+2) {
        const count = parseInt(str[i]);
        if(!count) throw new Error('Invalid input');
        answer += str[i-1].repeat(count);
    }
    return answer;
}

function validParentheses(str){
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for(let i = 0; i < str.length; i++){
        console.log(map[str[i]]);
        if(map[str[i]]) stack.push(str[i]);
        else {
            if(stack.length === 0) return false;
            if(map[stack[stack.length-1]] !== str[i]) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

function longestWordInSentence(str){
    return str.split(' ').reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr;
    });
}

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

// console.log(removeAllChar('hello world','o'));
// console.log(replaceAllChar('hello world','o','a'));
// console.log(sortArray(['apple','banana','water melon','cherry','date']));
// console.log(removeDuplicate(['apple','banana','water melon','cherry','date','apple','banana', 'apple']));
// console.log(longestWord(['banana','water melon','cherry','date','apple','banana', 'apple']));
// console.log(sumByReduce([1,2,3,4,5]));
// console.log(expandString('a2b4c5'))
// console.log(validParentheses('{})'));
// console.log(longestWordInSentence('The quick brown fox jumps over the lazy dog'));
console.log(isPalindrome('madam'));