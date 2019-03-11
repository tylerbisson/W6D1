function sums(){
  let sum = 0;
  for (let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum; 
}

function sums(...variables) {
  let sum = 0;
  for (let i = 0; i < variables.length; i++) {
    sum += variables[i];
  }
  return sum;
}

Function.prototype.myBind = function (ctx, ...args) {
  return (...runArgs) => {
    return this.call(ctx, ...(runArgs.concat(args)));
  };
};

function curriedSum(numArgs) {
  const numbers = [];

  return function _curriedSum(number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      return numbers.reduce((acc, ele) => acc + ele);
    } else {
      return _curriedSum;
    }
  };  
}

Function.prototype.curry = function (numArgs) {
  const args = [];
  const that = this;
  console.log(that);
  return function _curry(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      that.apply(this, args);
    } else {
      return _curry;
    }
  };
};

function twoTimer(...n) {
  ans = [];
  for (i = 0; i < n.length; i++){
    ans.push(n[i] * 2);
  }
  return ans;
}

function testPrint(...args) {
  console.log(this);
  console.log(args);
}