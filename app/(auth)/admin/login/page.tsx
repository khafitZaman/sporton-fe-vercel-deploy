"use client";
import Image from "next/image";
import Button from "@/app/(landing)/component/ui/button";
import { useRouter } from "next/navigation";
const Login = () => {
  const {push} =  useRouter();
  return (
    <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center">
      <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary py-12 px-18">
        <Image src={"/images/icon-admin.png"} alt="logo" width={304} height={51} className="mx-auto mb-4"/>
        <p className="backdrop-opacity-50 text-sx text-center mb-9">
          Enter your credentials to access the dashboard
        </p>

        <div className="input-group-admin mb-5">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Please type your email" className="rounded-lg!"/>
        </div>
        <div className="input-group-admin mb-12">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="••••••••••••••••••••" className="rounded-lg!"/>
        </div>
        <Button className="w-full rounded-lg! mb-8" onClick={() => push("/admin/products")}>Sign In</Button>
      </div>
    </main>
  )
}

export default Login;