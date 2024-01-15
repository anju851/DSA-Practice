// code to find the best day to buy and best day to sell stock out of the given price array of stocks
/*
profit=SellingPrice - CostPrice
 case when we can't achieve any profit:
     when we buy stock at high price and then the price never decrease,
     the array is in descending order
To attain maxProfit, the CP should be minimum and SP should be maximum
*/

//TimeComplexity =O(n)

let prices=[1,2,5,3,6,4,10,11];
function buySellStock(arr){
    let maxProfit = 0;
    let minCP=arr[0];

    for(let i=1;i<arr.length;i++){
        let profit=0;
        if(arr[i] > minCP){
            profit = arr[i]- minCP; //today's profit
            maxProfit=(profit > maxProfit) ? profit :maxProfit;  //Math.max(profit, maxProfit)
        }
        if(arr[i] < minCP){
            minCP=arr[i];
        }
        

    }
    return maxProfit;
}

console.log("max profit: ",buySellStock(prices));