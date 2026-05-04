import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  Baby,
  Phone,
  Mail,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { Button } from "./Button";
import {
  googleSheetsService,
  RegistrationData,
} from "../../services/googleSheets";

// Replace this with your actual Google Apps Script Web App URL
const DEFAULT_WEB_APP_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    parentName: "",
    childName: "",
    childAge: "",
    phoneNumber: "",
    email: "",
    course: "",
    notes: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // For demonstration, if the URL is the placeholder, we show mock success
      if (DEFAULT_WEB_APP_URL.includes("xyz")) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        return;
      }

      await googleSheetsService.submitRegistration(
        formData,
        DEFAULT_WEB_APP_URL,
      );
      setStatus("success");
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Failed to submit. Please try again later or contact us on WhatsApp.",
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-[2rem] p-10 text-center flex flex-col items-center justify-center gap-6 border-2 border-emerald-100"
      >
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Message Received!
          </h3>
          <p className="text-slate-600">
            Thank you for registering. Our team will contact you within 24 hours
            to schedule your free one-to-one trial session.
          </p>
        </div>
        <Button onClick={() => setStatus("idle")} variant="outline" size="sm">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-[2rem] p-8 md:p-10 border-2 border-brand-sky/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/5 rounded-bl-full -z-10" />

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900">Free Demo Class</h3>
        <p className="text-sm text-slate-500 mt-1">
          Fill the form and we'll reach out within 24h.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
              Parent Name
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-sky transition-colors">
                <User size={16} />
              </div>
              <input
                required
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-brand-sky/20 focus:border-brand-sky outline-none transition-all placeholder:text-slate-400 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
              Child Name
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-sky transition-colors">
                <Baby size={16} />
              </div>
              <input
                required
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Alex"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-brand-sky/20 focus:border-brand-sky outline-none transition-all placeholder:text-slate-400 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
              Child Age
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-sky transition-colors">
                <CheckCircle2 size={16} />
              </div>
              <select
                required
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-brand-sky/20 focus:border-brand-sky outline-none transition-all text-sm appearance-none"
              >
                <option value="" disabled>
                  Select age
                </option>
                <option value="7-9">7-9</option>
                <option value="10-12">10-12</option>
                <option value="13-16">13-16</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <Loader2 size={14} className="opacity-0" /> {/* Spacer */}
                <span className="text-[10px]">▼</span>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
              Phone Number
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-sky transition-colors">
                <Phone size={16} />
              </div>
              <input
                required
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+20 100 000 0000"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-brand-sky/20 focus:border-brand-sky outline-none transition-all placeholder:text-slate-400 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
            Email
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-sky transition-colors">
              <Mail size={16} />
            </div>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="parent@example.com"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-brand-sky/20 focus:border-brand-sky outline-none transition-all placeholder:text-slate-400 text-sm"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
            Interested Course
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-sky transition-colors">
              <BookOpen size={16} />
            </div>
            <select
              required
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-brand-sky/20 focus:border-brand-sky outline-none transition-all text-sm appearance-none"
            >
              <option value="" disabled>
                Select course
              </option>
              <option value="Computer Basics">Computer Basics</option>
              <option value="PictoBlox">PictoBlox</option>
              <option value="Python Basics">Python Basics</option>
              <option value="App Development (Flutter)">
                App Development (Flutter)
              </option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
            Additional Notes (Optional)
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-brand-sky transition-colors">
              <MessageSquare size={16} />
            </div>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Anything else we should know?"
              rows={2}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-brand-sky/20 focus:border-brand-sky outline-none transition-all placeholder:text-slate-400 text-sm resize-none"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full gap-2 mt-auto py-4 rounded-2xl"
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "Reserve Spot Now"
          )}
        </Button>

        <p className="text-[10px] text-center text-slate-400 mt-4 leading-tight">
          By clicking book free trial, you agree to our privacy policy and
          consent to being contacted via phone or email.
        </p>
      </form>
    </div>
  );
};
