'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  number: string;
  email: string;
  info: string;
  consent: boolean;
}

export default function EstimateForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    number: '',
    email: '',
    info: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Optional: Reject if user didn't give consent (if it's required)
    // if (!formData.consent) {
    //   alert('Please consent to receive text messages.');
    //   return;
    // }

    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (submitted) {
    return (
      <div className="w-full space-y-4 max-w-lg mx-auto mb-[20px] lg:mb-[0px] p-4 border rounded-md shadow-md bg-white">
        <h2 className="text-green-600 text-2xl font-semibold">
          Thank you! We&#39;ll contact you soon.
        </h2>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-4 max-w-lg mx-auto mb-[20px] lg:mb-[0px] p-4 border rounded-md shadow-md bg-white"
    >
      <h2 className="text-2xl font-semibold">Get an Estimate</h2>

      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone Number</label>
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Details</label>
        <textarea
          name="info"
          value={formData.info}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm">
          Click this box if you consent to receive text messages from us so we
          can get in touch with you over SMS. Message & data rates may apply.
          Reply STOP to opt out.
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
