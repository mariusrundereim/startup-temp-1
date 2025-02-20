import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import contactContent from "@/data/contactContent.json";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: contactContent.toast.title,
      description: contactContent.toast.description,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{contactContent.title}</h2>
            <p className="text-muted-foreground mb-8">
              {contactContent.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>{contactContent.contactDetails.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>{contactContent.contactDetails.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span>{contactContent.contactDetails.email}</span>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder={contactContent.form.placeholders.name}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <Input
                type="email"
                placeholder={contactContent.form.placeholders.email}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <Input
                placeholder={contactContent.form.placeholders.subject}
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
              />
              <Textarea
                placeholder={contactContent.form.placeholders.message}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="min-h-[150px]"
              />
              <Button type="submit" className="w-full">
                {contactContent.form.submitText}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
