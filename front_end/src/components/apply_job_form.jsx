import React from 'react';
import MyNavbar from './shared/navbar';
const JobApplicationForm = () => {
    return (
        <div className='w-full flex flex-col'>
            <MyNavbar/>

        <div className="max-w-5xl mx-auto px-4 py-10">
            {/* Header Section */}
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Apply Now For Job Opening</h2>
            <p className="text-gray-700 mb-4">Fill the following details that match your resume</p>
            <p className="text-red-600 mb-8">* All Fields are Necessary.</p>

            {/* Form Section */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col">
                    <label htmlFor="fullName" className="mb-2 text-sm font-semibold">Full Name *</label>
                    <input
                        type="text"
                        id="fullName"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Name"
                        />
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col">
                    <label htmlFor="dob" className="mb-2 text-sm font-semibold">DOB *</label>
                    <input
                        type="date"
                        id="dob"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="DD / MM / YYYY"
                        />
                </div>

                {/* Qualification */}
                <div className="flex flex-col">
                    <label htmlFor="qualification" className="mb-2 text-sm font-semibold">Qualification *</label>
                    <input
                        type="text"
                        id="qualification"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Qualification"
                        />
                </div>

                {/* Experience */}
                <div className="flex flex-col">
                    <label htmlFor="experience" className="mb-2 text-sm font-semibold">Experience *</label>
                    <input
                        type="text"
                        id="experience"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Experience in Years"
                        />
                </div>

                {/* Present Employer */}
                <div className="flex flex-col">
                    <label htmlFor="presentEmployer" className="mb-2 text-sm font-semibold">Present Employer *</label>
                    <input
                        type="text"
                        id="presentEmployer"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Present Employer"
                        />
                </div>

                {/* Type of Industry */}
                <div className="flex flex-col">
                    <label htmlFor="industry" className="mb-2 text-sm font-semibold">Type of Industry *</label>
                    <input
                        type="text"
                        id="industry"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="eg. CHEMICAL, ENGG, FMCG, etc."
                        />
                </div>

                {/* Present Salary */}
                <div className="flex flex-col">
                    <label htmlFor="presentSalary" className="mb-2 text-sm font-semibold">Present Salary *</label>
                    <input
                        type="text"
                        id="presentSalary"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Annual CTC"
                        />
                </div>

                {/* Functional Role */}
                <div className="flex flex-col">
                    <label htmlFor="functionalRole" className="mb-2 text-sm font-semibold">Functional Role *</label>
                    <input
                        type="text"
                        id="functionalRole"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="eg. Maintenance, QC, QA, etc."
                        />
                </div>

                {/* Present Location */}
                <div className="flex flex-col">
                    <label htmlFor="presentLocation" className="mb-2 text-sm font-semibold">Present Location *</label>
                    <input
                        type="text"
                        id="presentLocation"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Present Location"
                        />
                </div>

                {/* Location Preference */}
                <div className="flex flex-col">
                    <label htmlFor="locationPreference" className="mb-2 text-sm font-semibold">Location Preference *</label>
                    <input
                        type="text"
                        id="locationPreference"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Location Preference"
                    />
                    <small className="text-gray-500 mt-1">(You can add more than one city by adding commas.)</small>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
</div>
    );
}

export default JobApplicationForm;


// import React, { useState } from 'react';

// const JobApplicationForm = () => {
    //     const [formData, setFormData] = useState({
        //         fullName: '',
        //         dob: '',
//         qualification: '',
//         experience: '',
//         presentEmployer: '',
//         industryType: '',
//         presentSalary: '',
//         functionalRole: '',
//         presentLocation: '',
//         locationPreference: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data Submitted:', formData);
//         // Add form submission logic here
//     };

//     return (
//         <div className="max-w-4xl mx-auto bg-white p-8 shadow-md mt-10">
//             <h1 className="text-2xl font-bold text-blue-600 mb-4">Apply Now For Job Opening</h1>
//             <p className="text-gray-700 mb-6">Fill the following details that match your resume</p>
//             <p className="text-red-500 mb-4">* All Fields are Necessary</p>

//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Full Name */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         placeholder="Enter Name"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         required
//                     />
//                 </div>

//                 {/* DOB */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         DOB <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="date"
//                         name="dob"
//                         value={formData.dob}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         required
//                     />
//                 </div>

//                 {/* Qualification */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Qualification <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="qualification"
//                         value={formData.qualification}
//                         onChange={handleChange}
//                         placeholder="Enter Qualification"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         required
//                     />
//                 </div>

//                 {/* Experience */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Experience <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="number"
//                         name="experience"
//                         value={formData.experience}
//                         onChange={handleChange}
//                         placeholder="Enter Experience in Years"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         required
//                     />
//                 </div>

//                 {/* Present Employer */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Present Employer <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="presentEmployer"
//                         value={formData.presentEmployer}
//                         onChange={handleChange}
//                         placeholder="Enter Present Employer"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         required
//                     />
//                 </div>

//                 {/* Industry Type */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Type of Industry <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="industryType"
//                         value={formData.industryType}
//                         onChange={handleChange}
//                         placeholder="eg. CHEMICAL, ENGG, FMCG"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         required
//                     />
//                 </div>

//                 {/* Present Salary */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Present Salary <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="presentSalary"
//                         value={formData.presentSalary}
//                         onChange={handleChange}
//                         placeholder="Annual CTC"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         required
//                     />
//                 </div>

//                 {/* Functional Role */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Functional Role <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="functionalRole"
//                         value={formData.functionalRole}
//                         onChange={handleChange}
//                         placeholder="eg. Maintenance, QC, QA, etc."
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         required
//                     />
//                 </div>


