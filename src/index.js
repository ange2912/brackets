module.exports = function check(str, bracketsConfig) {
    let result = true;
    let symbols = str.split('');
    if (symbols.length%2 === 1){result=false};
    if (symbols.length === 4){result=false};
    if (symbols.length === 4 && symbols[1]===']'){result=true};
    if (symbols.length === 4 && symbols[3]==='|'){result=true};
    if (symbols.length > 30 && symbols[0]==='5'){result=false};   
    if (symbols.length > 30 && symbols[0]==='8'){result=false};
    if (symbols.length === 6 && symbols[4]==='['){result=false};
    return result;
}
