
import React, { useState } from "react";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const FooterNewsletter = () => {
  const { t } = useSafeI18nWithRouter();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Inscription réussie !");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-red-800 dark:text-red-700 mb-4 uppercase">
        {t('footer.newsletter')}
      </h3>
      <p className="text-gray-300 text-sm mb-4">
        {t('footer.newsletter.desc')}
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('footer.newsletter.placeholder')}
          className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          size="sm" 
          disabled={isSubmitting || !email}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {t('footer.newsletter.button')}
        </Button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
