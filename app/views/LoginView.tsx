"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,

  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
import { Sparkles, ArrowRight, Bot, Cpu } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z
    .string()
    .email("Invalid email address")
    .refine((email) => email.trim().toLowerCase().endsWith("@sscinc.com"), {
      message: "Please use your corporate email address",
    }),
});

const LoginView = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    sessionStorage.setItem("userEmail", values.email);
    sessionStorage.setItem("userName", values.name);
    router.push("/chat");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FAFAFA] font-sans relative overflow-hidden">
      
      {/* Abstract AI Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Pattern for that "Tech/Data" feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />

      <div className="w-full max-w-md p-6 sm:p-10 relative z-10 animate-in fade-in zoom-in-95 duration-700">
        
        {/* Main Floating Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 relative overflow-hidden">
          
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500" />

          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-8 space-y-4">
            <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner border border-blue-100/50 relative group">
              <Bot className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center justify-center gap-2">
                Meet Turbo
                <Sparkles className="h-5 w-5 text-blue-500" />
              </h1>
              <p className="text-sm text-slate-500 font-medium">
                SS&C&apos;s workplace assistant.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-slate-50/50 border-slate-200 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all rounded-xl text-slate-900 placeholder:text-slate-400"
                        placeholder="What should I call you?"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs ml-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-slate-50/50 border-slate-200 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all rounded-xl text-slate-900 placeholder:text-slate-400"
                        placeholder="Your company email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs ml-1" />
                  </FormItem>
                )}
              />
              <Button
                disabled={form.formState.isSubmitting}
                size="lg"
                type="submit"
                className="w-full h-12 mt-4 bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all rounded-xl group font-semibold tracking-wide cursor-pointer"
              >
                {form.formState.isSubmitting ? (
                  <Cpu className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Start Session
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-slate-400 mt-6 font-medium tracking-wide">
          SECURE &bull; INTERNAL &bull; AI-POWERED
        </p>
      </div>
    </div>
  );
};

export default LoginView;