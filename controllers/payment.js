const axios = require("axios")

module.exports = {
    Add: async (req, res)=>{
        const url = "https://developers.flouci.com/api/generate_payment"

        const payload = {
        
            "app_token": "f98f42e6-c4c8-4da1-b779-130e7732c499", 
            "app_secret": process.env.MONEY   ,
            "amount": req.body.amount,
            "accept_card": "true",
            "session_timeout_secs": 1200,
            "success_link": "https://localhost:3000/success",
            "fail_link": "https://localhost:3000/fail",
            "developer_tracking_id": "d70f08e3-ed45-46f0-8048-5e0e56cb2f50"

        }
      await axios
      .post(url ,payload )
      .then(result =>{
          res.send(result.data)
      })
      .catch(err => console.log(err) )
    },


    verify: async (req, res)=>{
        const payment_id = req.params.id;
       
      await  axios.get(`https://developers.flouci.com/api/verify_payment/${payment_id}`,
        
     {   headers : {
             'Content-Type' : 'application/json',
            'apppublic' : "f98f42e6-c4c8-4da1-b779-130e7732c499",
            'appsecret' : process.env.MONEY 
        }
    }
        )
        .then(result=>{
            res.send(result.data)
        })
        .catch(err=> {
            console.log(err.message)
        } )
    }
}