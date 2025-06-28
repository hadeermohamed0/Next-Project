import { connectDB, disconnectDB } from "@/db/dbConnection";
import User from "@/models/User";

export async function POST(request) {
    
    const body = await request.json();

  console.log({ userTryingToLog: body });

  await connectDB()

  const user = await User.findOne({ email: body.email });

  
  if (user) {
    return Response.json({
      message: "User Already exists!!",
    });
  }

//   hashing , object , save instead of that we use mongoose hooks
// pre , post
  const newUser = new User(body)
  await newUser.save()

  await disconnectDB()

    return Response.json({
        message:"You will be registered from this route"
    })
}