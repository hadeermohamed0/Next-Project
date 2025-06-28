import { connectDB ,disconnectDB } from "@/db/dbConnection";
import User from "@/models/User";

import * as bc from "bcryptjs"
import * as jwt from "jsonwebtoken"

export async function POST(request) {
  const body = await request.json();

  console.log({ userTryingToLog: body });

  await connectDB()

  const user = await User.findOne({ email: body.email });

  
  if (!user) {
    return Response.json({
      message: "There is no user with that Email!",
    });
  }


  const isMatched = await bc.compare(body.password , user.password )
  if(isMatched){
    const payload ={
        username:user.username,
        role:"user",
    }

    const token = jwt.sign(payload , "iti-portsaid" , {expiresIn:"60d"})
    // generate token
    // send it to the user
    return Response.json({
        token:token
    })
  }
  await disconnectDB()
  return Response.json({
    message: "you will use this route to sign in",
  });
}
