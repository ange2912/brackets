module.exports = function check(str, bracketsConfig) {
    let i=0;
    while (i < bracketsConfig.length){
        let currentBracket = bracketsConfig[i].join('');
        if (str.includes(currentBracket)){
            str = str.replace(currentBracket,'');
            i=0;
        }else{
            i++;
        }
    }
    return str ? false : true;
}
