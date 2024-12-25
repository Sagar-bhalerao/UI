
import { BsPersonGear } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';

const questions = [
  { id: 1, qname: "What is today's sale?" },
  { id: 2, qname: "How many products were sold today?" },
  { id: 3, qname: "What is the total revenue for the day?" },
  { id: 4, qname: "Which product had the highest sales today?" },
  { id: 5, qname: "What is the current stock level of our best-selling product?" },
  { id: 6, qname: "What is the average transaction value today?" },
  { id: 7, qname: "What are the top 5 products sold today?" },
  { id: 8, qname: "How many new customers made purchases today?" },
  { id: 9, qname: "What are the most common payment methods used today?" },
  { id: 10, qname: "What time of the day had the highest sales today?" }
];


const locations = [
    { id: 1, name: "New York" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "Chicago" },
    { id: 4, name: "Houston" },
    { id: 5, name: "Phoenix" },
    { id: 6, name: "Philadelphia" },
    { id: 7, name: "San Antonio" },
    { id: 8, name: "San Diego" },
    { id: 9, name: "Dallas" },
    { id: 10, name: "San Jose" }
  ];
  
const Cards = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {questions.map((item) => (
        <div key={item.id} className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
            <p className="mt-1 text-sm text-gray-500 dark:text-white">
              <span className="inline-flex font-bold text-xl">{item.id}. {item.qname}</span>
            </p>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4">
              <div>
                <label htmlFor={`hs-select-label-${item.id}`} className="block text-sm font-medium mb-2 dark:text-white">Status <span className="text-red-600">*</span></label>
                <select id={`hs-select-label-${item.id}`} className="bg-slate-100 py-2 px-4 pr-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option selected>Select The Status</option>
                  <option>Completed</option>
                  <option>InCompleted</option>
                  <option>InProgress</option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor={`input-label-with-helper-text-${item.id}`} className="block text-sm font-medium mb-2 dark:text-white">Description <span className="text-red-600">*</span></label>
                <input type="text" id={`input-label-with-helper-text-${item.id}`} className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter Description" />
              </div>

              <div className="w-full">
                <label htmlFor={`input-label-with-file-${item.id}`} className="block text-sm font-medium mb-2 dark:text-white">Upload File <span className="text-red-600">*</span></label>
                <input type="file" id={`input-label-with-file-${item.id}`} accept="image/*" className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
              </div>
            </form>
          </div>
        </div>
      ))}




    </div>

     
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
    {locations.map((item)=>(
        <div key={item.id} className=" border-2 h-16  border-transparent dark:hover:border-blue-500 hover:border-blue-600 transition-all duration-300 ease-in-out flex flex-col bg-white  shadow-xl rounded-xl dark:bg-neutral-800 dark:border-neutral-700 ">
    <div className="p-4 md:p-5">
      <div className="flex items-center gap-x-2 justify-center">
        <p><MdOutlineShoppingCart /></p>
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-white ">
          {item.name}
        </p>
      </div>

      
    </div>
  </div>
    ))}
    </div>

    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal">
  Edit  modal
</button>

<div id="hs-slide-down-animation-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="hs-slide-down-animation-modal-label">
  <div className="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
        <h3 id="hs-slide-down-animation-modal-label" className="font-bold text-gray-800 dark:text-white flex gap-1">
         Edit Member <BsPersonGear size={20} className='mt-[2px]' />
        </h3>
        <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-slide-down-animation-modal">
          <span className="sr-only">Close</span>
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div className="p-4 overflow-y-auto">
        <form >
        <div className="w-full mb-3">
                <label htmlFor={`input-label-with-helper-text`} className="block text-sm font-medium mb-2 dark:text-white">Member Name <span className="text-red-600">*</span></label>
                <input type="text" id={`input-label-with-helper-text`} className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600" placeholder='Member Name' />
              </div>
              <div className="w-full mb-3">
                <label htmlFor={`input-label-with-helper-text`} className="block text-sm font-medium mb-2 dark:text-white">Email <span className="text-red-600">*</span></label>
                <input type="email" id={`input-label-with-helper-text`} className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600" placeholder='Member Email' />
              </div>
              <div className='mb-3'>
                <label htmlFor={`hs-select-label`} className="block text-sm font-medium mb-2 dark:text-white">Status <span className="text-red-600">*</span></label>
                <select id={`hs-select-label`} className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600">
                  <option selected>Select The Status</option>
                  <option>Active</option>
                  <option>InActive</option>                  
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor={`hs-select-label`} className="block text-sm font-medium mb-2 dark:text-white">Location <span className="text-red-600">*</span></label>
                <select id={`hs-select-label`} className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600">
                  <option selected>Select The Status</option>
                  <option>Pune</option>
                  <option>Sangamner</option>
                  <option>Nashik</option>
                </select>
              </div>
        </form>
      </div>
      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-slide-down-animation-modal">
          Close
        </button>
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
         Update
        </button>
      </div>
    </div>
  </div>
</div>
    
  </>
  );
}

export default Cards;
