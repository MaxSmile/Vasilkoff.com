// src/app/_components/BugReportForm.js

const BugReportForm = () => {
    return (
        <div className="py-16" id="report">
            <h2 className="text-3xl font-extrabold text-center mb-8">Report a Bug</h2>
            <form className="max-w-2xl mx-auto space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="description" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Submit</button>
            </form>
        </div>
    );
};

export default BugReportForm;
