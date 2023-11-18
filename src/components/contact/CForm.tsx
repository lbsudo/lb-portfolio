"use client"
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Input, Textarea } from "@nextui-org/react";
import { formSubmit } from '@/server-actions/email/formSubmit';

interface FormData {
  Name: string;
  Email: string;
  Message: string;
}


export default function CForm() {
  const [formData, setFormData] = useState<FormData>({
    Name: '',
    Email: '',
    Message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('/api/send-email', formData); // Updated URL
      console.log("Email sent successfully");
      setFormData({
        Name: '',
        Email: '',
        Message: '',
      });
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='w-full'>
      <form className='flex flex-col w-full' onSubmit={handleSubmit}>
        <Input isRequired type='text' label="Name" arai-label="Message" placeholder="Enter your name" value={formData.Name} onChange={handleChange} />
        <Input isRequired type="email" label="Email" aria-label="Message" placeholder="Enter your email" value={formData.Email} onChange={handleChange} />
        <Textarea isRequired type="text" label="Message" aria-label='Message' placeholder="What can I help you with?" value={formData.Message} onChange={handleChange} />
        <button
          type="submit"
          aria-label="Submit">Send Message</button>
      </form>
    </div>
  )
}
