let dic={}
if(process.env.ENV==="DEVELOP"){
    dic.PORT=7800
}
else
{
    dic.PORT=process.env.PORT
}
module.exports=dic