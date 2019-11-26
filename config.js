let dic={}
if(process.env.ENV==="DEVELOP"){
    dic.PORT=7800
    dic.MONGO_URL="mongodb://localhost/lawda"
}
else
{
    dic.PORT=process.env.PORT
    dic.MONGO_URL="production"
}
module.exports=dic