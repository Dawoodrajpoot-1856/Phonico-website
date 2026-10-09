import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CheckoutClient from "@/components/CheckoutClient";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export const instant = false;

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/checkout");
  }

  return <CheckoutClient />;
}
