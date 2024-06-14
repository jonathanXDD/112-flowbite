export async function GET(){
    //1 get access tonken
    const token=await getToken();
    //2 get data from DTX api
    if (token){
        const apidata = await fetchData(token);
        //console.log(apidata);
        return Response.json(apidata);
    }else{
        return Response.json({error:'Fail to rereieve access token'},{status:401});
    }
    
    
}
async function getToken(){
    const authURL='https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
    const params=new URLSearchParams();
    params.append('grant_type','client_credentials');
  params.append('client_id',process.env.TDX_CLIENT_ID);
  params.append('client_secret',process.env.TDX_CLIENT_SECRET);
  //console.log(params);
  try{
    const response=await fetch(authURL,{
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:params.toString(),
    });
    console.log(response);
    if(response.ok){
        const data =await response.json();
        console.log(JSON.stringify(data));
        return data.access_token;
    }else{
        console.error("error fetching tonken",response.status);
    }
  }catch(error){
    console.log("error fetching",error);
  };
}
async function fetchData(token){
    const apiURL='https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty';
    try{
        const response = await fetch(apiURL,{
            method:'GET',
            headers:{
                authorization:`Bearer ${token}`,
                'Content-Type':'application/json',
            },
        });
        if(response.ok){
            const data =await response.json();
            console.log(JSON.stringify(data));
            return data;
        }else{
            console.error('Error fetching data:',response.status);
        }
    }catch(error){
        console.error("error fetchong data",error);
    }
}