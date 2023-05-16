const UserAuth = require("../models/UserAuth");

exports.postAddAuthDetails = async (request, response, next) => {

    const userId = request.body.id;
    console.log("userrrrrId",userId)
    try {
        if (!request.body.name || !request.body.email || !request.body.password) {
            throw new Error("all fields are required");
        }

        /*UserAuth.findAll().then(users=>{
            console.log("Usersssssss",users)
            console.log("users email",users.email)
            
        }).catch(err=>console.log(err))
        */

    
        const name = request.body.name;
        const email = request.body.email;
        const password = request.body.password;
        const data = await UserAuth.create({
            name:name,
            email:email,
            password:password
           
           
        });
        console.log(data)

        response.status(201).json({ newUserDetails: data })
    } catch (err) {
        console.log(err)
        response.status(500).json({ error: err })
    }

}
