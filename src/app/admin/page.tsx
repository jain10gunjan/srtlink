"use client"
import React, { useState } from 'react';
import axios from 'axios';

const JobApplicationForm: React.FC = () => {
    const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    searchid: '',
    title: '',
    experience: '',
    sharetext: '',
    createdat: '' || formattedDate,
    companyName: '',
    companyLocation: '',
    category: '' || 'IT',
    salary: '',
    type: '',
    requirements: '',
    applyBefore: '' || formattedDate,
    link: '',
    image: '',
    description: '' || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit odio excepturi et minus vel temporibus cupiditate unde nulla consequuntur impedit.' ,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    //   const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/aptitude_tracker_api-fjroz/endpoint/jobsform', formData);
      console.log('Response:', JSON.stringify(formData));

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>
      {Object.keys(formData).map((field) => (
        <div key={field} className="mb-4">
          <label className="block text-gray-700 mb-2 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
          {field === 'description' ? (
            <textarea
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <input
              type="text"
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
    </>
  );
};

export default JobApplicationForm;