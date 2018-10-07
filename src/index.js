class SmartCalculator {
  constructor(initialValue) {
    this.getPol=[initialValue];
  }
 
  add(number) {
    this.getPol.push("+");
    this.getPol.push(number);
    return this;
  }
 
  subtract(number) {
    this.getPol.push("-");
    this.getPol.push(number);
    return this;
  }
 
  multiply(number) {
    this.getPol.push("*");
    this.getPol.push(number);
    return this;
  }
 
  devide(number) {
    this.getPol.push("/");
    this.getPol.push(number);
    return this;
  }
 
  pow(number) {
    this.getPol.push("^");
    this.getPol.push(number);
    return this;
  }
  toString() {
    for(let i = this.getPol.length-1; i >= 0; i--){
      if(this.getPol[i]=="^"){
        this.getPol.splice(i-1,3, Math.pow(this.getPol[i-1], this.getPol[i+1]));
        i++;
      }
    }
    for(let i = 0 ; i < this.getPol.length; i++){
      if(this.getPol[i]=="*"){
        this.getPol.splice(i-1,3,this.getPol[i-1]*this.getPol[i+1]);
        i--;
      }
      if(this.getPol[i]=="/"){
        this.getPol.splice(i-1,3,this.getPol[i-1] / this.getPol[i+1]);
        i--;
      }
    }
    for(let i = 0 ; i < this.getPol.length; i++){
      if(this.getPol[i]=="+"){
        this.getPol.splice(i-1,3,this.getPol[i-1] + this.getPol[i+1]);
        i--;
      }
      if(this.getPol[i]=="-"){
        this.getPol.splice(i-1,3,this.getPol[i-1]-this.getPol[i+1]);
        i--;
      }
    }
    return this.getPol[0];
  }
}

module.exports = SmartCalculator;
