function solv(n){
    var dp = Array.from(new Array(n+1).fill(0));
    if(n==1){
        return 1;
    }else if(n==2){
        return 2;
    }else if(n==3){
        return 4;
    }
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    if(n>=4){
        for(let i=4;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-3]+dp[i-2];
        }
    }
    return dp[n];
}
console.log(solv(6));
