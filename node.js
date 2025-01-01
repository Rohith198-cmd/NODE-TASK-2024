const newbfb=new Buffer('NEW BUFFER')
console.log(newbfb);

const modifiedbfb='modified '+(newbfb)
console.log(modifiedbfb.toString());

const remodifiedbfb=new Buffer(modifiedbfb)
console.log(remodifiedbfb);