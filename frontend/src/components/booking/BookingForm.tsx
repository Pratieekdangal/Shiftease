
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Ruler, 
  Info 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from '../ui/GlassCard';
import { toast } from "sonner";

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fromAddress: '',
    toAddress: '',
    moveDate: '',
    loadSize: 'medium',
    specialInstructions: ''
  });

  useEffect(() => {
    // Check if we have data from the quick quote form
    const savedQuoteData = sessionStorage.getItem('quoteData');
    if (savedQuoteData) {
      try {
        const quoteData = JSON.parse(savedQuoteData);
        setFormData(prev => ({
          ...prev,
          fromAddress: quoteData.fromAddress || '',
          toAddress: quoteData.toAddress || '',
          moveDate: quoteData.moveDate || ''
        }));
      } catch (error) {
        console.error('Error parsing saved quote data:', error);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoadSizeChange = (size: string) => {
    setFormData(prev => ({
      ...prev,
      loadSize: size
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.fromAddress || !formData.toAddress || !formData.moveDate) {
        toast.error("Please fill out all required fields");
        return;
      }
    }
    
    // For the demo, we'll just show the first step, but normally we'd increment the step
    // setStep(step + 1);
    
    // Instead of changing steps, show success message
    toast.success("Your booking information has been submitted!", {
      description: "We'll contact you shortly with a detailed quote."
    });
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStepOne = () => {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="from-address">
            Moving From <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              id="from-address"
              name="fromAddress"
              type="text" 
              placeholder="Enter your current address" 
              className="pl-10 py-6 rounded-xl"
              value={formData.fromAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="to-address">
            Moving To <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              id="to-address"
              name="toAddress"
              type="text" 
              placeholder="Enter your destination address" 
              className="pl-10 py-6 rounded-xl"
              value={formData.toAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="move-date">
            Moving Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              id="move-date"
              name="moveDate"
              type="date" 
              className="pl-10 py-6 rounded-xl"
              value={formData.moveDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Load Size <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => handleLoadSizeChange('small')}
              className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all ${
                formData.loadSize === 'small' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Ruler className="h-6 w-6 mb-2 text-muted-foreground" />
              <span className="font-medium">Small</span>
              <span className="text-xs text-muted-foreground">Studio/1BR</span>
            </button>
            <button
              type="button"
              onClick={() => handleLoadSizeChange('medium')}
              className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all ${
                formData.loadSize === 'medium' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Ruler className="h-6 w-6 mb-2 text-muted-foreground" />
              <span className="font-medium">Medium</span>
              <span className="text-xs text-muted-foreground">2-3 BR</span>
            </button>
            <button
              type="button"
              onClick={() => handleLoadSizeChange('large')}
              className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all ${
                formData.loadSize === 'large' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Ruler className="h-6 w-6 mb-2 text-muted-foreground" />
              <span className="font-medium">Large</span>
              <span className="text-xs text-muted-foreground">4+ BR</span>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="special-instructions">
            Special Instructions
          </label>
          <div className="relative">
            <Info className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Textarea 
              id="special-instructions"
              name="specialInstructions"
              placeholder="Any additional details about your move" 
              className="pl-10 pt-6 min-h-[120px] rounded-xl"
              value={formData.specialInstructions}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div className="flex justify-end pt-4">
          <Button 
            type="button" 
            onClick={handleNext}
            size="lg"
            className="rounded-xl py-6"
          >
            Continue to Next Step
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <GlassCard className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Book Your Move</h2>
          <p className="text-muted-foreground">Step {step} of 5: Location Details</p>
          
          <div className="w-full bg-secondary h-2 rounded-full mt-4">
            <div 
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${step * 20}%` }}
            ></div>
          </div>
        </div>
        
        {renderStepOne()}
      </GlassCard>
    </div>
  );
};

export default BookingForm;
