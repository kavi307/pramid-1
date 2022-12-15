var i,j;
var alpha;
for(i=1;i<=5;i++){
    alpha=65;
    for(j=1;j<=i;j++){
        document.write(String.fromCharCode(alpha));
        alpha++;
    }
    document.write("<br>");
}