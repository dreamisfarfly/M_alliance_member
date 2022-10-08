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

/**
 * 跳转页面
 * @param {string} page 
 */
function jump(page){
	uni.navigateTo({
		url: page
	})
}

module.exports = {
    numberTransformation: numberTransformation,
    jump: jump
}