const serverUrl = 'https://loyalty.collectapps.io/api/v1/';
export function query(apiName, method, body){
    var param = {
        method: method, 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ''
        },
        body: JSON.stringify(body)
    }
    if (method === 'GET') param = {headers: {
            'Authorization': 'ApiKey hu0BgORHLmFGYbsJpY8vUuSIoa9aBc'
        }
    }

    var myRequest = new Request(serverUrl + apiName, param);

    return new Promise(function(resolve, reject){
        fetch(myRequest)
            .then(function(response) {           
                // console.log(response.json())
                 if(response.status == 200) return response.json(); 
                 else{
                     return reject(response) ;
                 }
            })

            .then(function(response) { 
                return resolve(response);
            })           

            .catch(function(error) {   
                console.error(error);           
                return reject(error) ;         
            })
    })
}

