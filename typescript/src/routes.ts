import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "a@email.com",
    password: "124323",
    techs: [
      "Node",
      "React",
      "Other",
      {
        title: "javascript",
        experience: 1000,
      },
    ],
  });

  console.log(user.email);
  return response.json({ message: "Hello World" });
}
