import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', middleName: '', lastName: '', email: '',
    phone: '', occupation: 'Student', companyName: '',
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);
  
    try {
      const response = await fetch('http://localhost/api/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setIsError(false);
        setMessage(result.message);
        setFormData({
          firstName: '', middleName: '', lastName: '', email: '',
          phone: '', occupation: 'Student', companyName: '',
        });
      } else {
        setIsError(true);
        setMessage(result.message || 'An error occurred.');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Could not connect to the server. Please ensure XAMPP is running.');
      console.error('Submission error:', error);
    }
  };
  
  const customStyles = `
    .holographic-form {
      background: linear-gradient(145deg, rgba(59, 130, 246, 0.05), rgba(37, 99, 235, 0.05));
      box-shadow: 0 0 25px rgba(59, 130, 246, 0.1);
    }
  `;

  return (
    <div id="registration-form" className="container mx-auto max-w-2xl">
      <style>{customStyles}</style>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Pre-Book My Seat
      </h2>
      
      <form 
        onSubmit={handleSubmit} 
        className="holographic-form backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-blue-500/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="bg-black/30 text-white p-3 rounded-md border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} className="bg-black/30 text-white p-3 rounded-md border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="bg-black/30 text-white p-3 rounded-md border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
        <div className="mb-6">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full bg-black/30 text-white p-3 rounded-md border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
        <div className="mb-6">
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full bg-black/30 text-white p-3 rounded-md border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <select name="occupation" value={formData.occupation} onChange={handleChange} className="w-full bg-black/30 text-white p-3 rounded-md border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
            <option className="bg-black">Student</option>
            <option className="bg-black">Professional</option>
          </select>
          <input type="text" name="companyName" placeholder="College/Company Name" value={formData.companyName} onChange={handleChange} required className="w-full bg-black/30 text-white p-3 rounded-md border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>

        {message && (
          <div className={`text-center p-3 rounded-md mb-4 ${isError ? 'bg-red-500/80 border-red-400' : 'bg-blue-500/80 border-blue-400'}`}>
            {message}
          </div>
        )}

        <button type="submit" className="w-full mt-4 px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-colors duration-300 transform hover:scale-105">
          Pre-Book My Seat
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;