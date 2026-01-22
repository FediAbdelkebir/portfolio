import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Form Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark-100/50 dark:bg-dark-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark-800 dark:text-white">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            Let's connect and discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-xl text-primary pt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-dark-600 dark:text-dark-300 mb-1">Email</p>
                  <a href="mailto:fedi.abdelkebir@yahoo.com" className="text-dark-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                    fedi.abdelkebir@yahoo.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-xl text-primary pt-1">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="text-dark-600 dark:text-dark-300 mb-1">Phone</p>
                  <a href="tel:+21654105028" className="text-dark-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                    +216 54105028
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-xl text-primary pt-1">
                  <i className="fas fa-globe"></i>
                </div>
                <div>
                  <p className="text-dark-600 dark:text-dark-300 mb-1">Website</p>
                  <a href="http://fediabdelkebir.me/" target="_blank" rel="noopener noreferrer" className="text-dark-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                    fediabdelkebir.me
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-xl text-primary pt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-dark-600 dark:text-dark-300 mb-1">Location</p>
                  <p className="text-dark-800 dark:text-white">
                    Tunisia, Tunis
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-dark-800 dark:text-white">Social Profiles</h4>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white">Send Message</h3>
            
            <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-dark-600 dark:text-dark-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  className="w-full p-3 rounded-lg border border-dark-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-800 dark:text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-dark-600 dark:text-dark-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email" 
                  className="w-full p-3 rounded-lg border border-dark-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-800 dark:text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-dark-600 dark:text-dark-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  className="w-full p-3 rounded-lg border border-dark-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-800 dark:text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-dark-600 dark:text-dark-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Your message" 
                  className="w-full p-3 rounded-lg border border-dark-300 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-800 dark:text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
