/**
 * 数量格式转换
 * @param {int} count 数量
 * @returns 
 */
function numberTransformation(count) {
    console.log(count)
    if(count<1000){
        return count;
    }
    if(count>=1000 && count < 10000)
    {
        return (count/1000).toFixed(1);
    }
    if(count>=10000){
        return (count/10000).toFixed(1)+'W';
    }
}

module.exports = {
    numberTransformation: numberTransformation
}