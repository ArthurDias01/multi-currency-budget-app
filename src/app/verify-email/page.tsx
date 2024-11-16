import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MailCheck } from "lucide-react";

export default function VerifyEmail() {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Alert variant="default" className="max-w-md">
        <MailCheck className="h-5 w-5" />
        <AlertTitle>Verify your email</AlertTitle>
        <AlertDescription>
          Please check your email inbox and click on the verification link we
          sent you to complete your registration.
        </AlertDescription>
      </Alert>
    </div>
  );
}
