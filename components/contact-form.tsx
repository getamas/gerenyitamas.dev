"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  projectType: z.string().optional(),
  services: z.string().optional(),
  projectBudget: z.string().optional(),
  projectDueDate: z.string().optional(),
  fullName: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email({ message: "Must be a valid email" }),
  website: z.string().optional(),
  message: z.string().min(1, { message: "This field is required" }),
})

const defaultValues = {
  projectType: "",
  services: "Development",
  projectBudget: "",
  projectDueDate: "",
  fullName: "",
  email: "",
  website: "",
  message: "",
}

type ContactFormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues,
  })

  function onSubmit(values: ContactFormValues) {
    try {
      // TODO: send to api endpoint
      console.log(values)

      // TODO: show success toast
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What type of project do you need completed?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Web App">Web App</SelectItem>
                  <SelectItem value="Marketing Website">
                    Marketing Website
                  </SelectItem>
                  <SelectItem value="Web App Audit">Web App Audit</SelectItem>
                  <SelectItem value="Website Audit">Website Audit</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                This will help me understand the basic needs of your project and
                set the right budget and timeline expectations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Which services do you need?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Development" />
                    </FormControl>
                    <FormLabel className="font-normal">Development</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Development & Design" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Development & Design
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Development & Design & SEO" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Development & Design & SEO
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="SEO" />
                    </FormControl>
                    <FormLabel className="font-normal">SEO</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Other" />
                    </FormControl>
                    <FormLabel className="font-normal">Other</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                Please specify the type level of completion you&apos;d like me
                to deliver on this project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectBudget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whats the budget for your project?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Less than $2500">
                    Less than $2500
                  </SelectItem>
                  <SelectItem value="$2500 - $5000">$2500 - $5000</SelectItem>
                  <SelectItem value="$5000 - $10000">$5000 - $10000</SelectItem>
                  <SelectItem value="$10000 - $20000">
                    $10000 - $20000
                  </SelectItem>
                  <SelectItem value="$20000 - $50000">
                    $20000 - $50000
                  </SelectItem>
                  <SelectItem value="$50000+">$50000+</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                This will help me guide you toward the most appropriate solution
                within your budget. Consider this a starting point to our
                conversation, not a final quote.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>When do you need this project completed?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Completion Time" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Less than 1 Month">
                    Less than 1 Month
                  </SelectItem>
                  <SelectItem value="1 - 2 Months">1 - 2 Months</SelectItem>
                  <SelectItem value="2 - 3 Months">2 - 3 Months</SelectItem>
                  <SelectItem value="3 - 6 Months">3 - 6 Months</SelectItem>
                  <SelectItem value="6 Months+">6 Months+</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the option that best expresses your expectations for the
                timeline of this project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Smith" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL (optional)</FormLabel>
              <FormControl>
                <Input placeholder="www.example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Tell me about your project..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Send
        </Button>
      </form>
    </Form>
  )
}
