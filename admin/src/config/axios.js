import axios from "axios"





export let axiosAuth = () => {
  let user = localStorage.getItem('user') ?  JSON.parse(localStorage.getItem('user')) : {};
  return axios.create({
    headers: {
      Authorization : `Bearer ${user.tokens?.access?.token}`
      }
    }
  )
} 

  export let axiosAuthUpload = () => {
    let user = localStorage.getItem('user') ?  JSON.parse(localStorage.getItem('user')) : {};
   return  axios.create({
      headers: {
        Authorization : `Bearer ${user.tokens?.access?.token}`,
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json" 
        }
    }
    )
  } 

  // axiosAuthUpload.interceptors.response.use((response) => {
  //   return response;
  // }, (error) => {
  //   if(error.response.status === 401){
  //     console.log('Please refresh token')
      
  //   }
  // })

  

