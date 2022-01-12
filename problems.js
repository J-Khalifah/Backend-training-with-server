// ******************PYTHAGORAS THEOREM********************************************

function pythagoras(a,b){
    let c = Math.pow(a,2) + Math.pow(b,2);
    let ans = Math.sqrt(c)
    let ans2 = Math.round(ans)
    console.log(`c = ${ans} , approximately = ${ans2}`);
};
pythagoras(2,3);


// ******************QUADRATIC EQUATION**********************************************

function quadraticEquation(a,b,c){
    let result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) /  (2 * a);
    let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) /  (2 * a);
    let ans1 = Math.round(result1);
    let ans2 = Math.round(result2);
    console.log(`result1 = ${ans1} result2 = ${ans2}`)
}
quadraticEquation(1,1,-1)

// *********************AREA OF A TRIANGLE********************************************

function areaOfTriangle(b,h){
    let area1 = 1/2 * b * h;
    let area2 = Math.round(area1);
    console.log(`Area of triangle = ${area1} , approximately = ${area2}`);
}
areaOfTriangle(2,6);

// ********************VOLUME OF A SPHERE**********************************************

function volumeOfSphere(radius){
    let volume = 4/3 * Math.PI * Math.pow(radius,3);
    let volume2 = Math.round(volume);
    console.log(`Volume of a sphere = ${volume} , approximately = ${volume2}`);
}
volumeOfSphere(2);

// ********************COMPOUND INTEREST************************************************

function compoundInterest(p,r,n,t){
    let A = p * Math.pow((1 + r/n),n * t);
    let A2 = Math.round(A);
    console.log(`compound interest  = ${A} , approximately = ${A2}`)
}
compoundInterest(1,2,3,4);

// *********************SURFACE AREA OF A SPHERE****************************************

function volumeOfSphere(radius){
    let S = 4 * Math.PI * Math.pow(radius,2);
    let S2 = Math.round(S);
    console.log(`Volume of a sphere = ${S} , approximately = ${S2}`);
}
volumeOfSphere(7);