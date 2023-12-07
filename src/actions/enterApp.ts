"use server";

import prisma from "@/libs/prisma";
import { redirect } from "next/navigation";

export default async function enterApp(formData: FormData): Promise<void> {
  const username = formData.get("username") as string;

  // find existing user in database
  const user = await prisma.user.findUnique({
    where: {
      username: username
    }
  });

  // create new user if no existing user
  if (!user) {
    await prisma.user.create({
      data: {
        username
      }
    });
  }

  // find the latest session of ultimate clash
  const maxSession = await prisma.ultimateClash.aggregate({
    _max: { session: true },
  });

  // redirect to ultimate clash page
  redirect(`/ultimate-clash/${maxSession._max.session}`);
}