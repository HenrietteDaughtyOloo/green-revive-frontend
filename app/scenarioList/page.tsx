'use client'
import React from 'react';
import { FaUser, FaBell } from 'react-icons/fa';
import DeleteModal from '../DeletePopUp/index';
import Link from 'next/link';
import EditModal from '../EditPopUp/page';

const ScenarioListPage = () => {
  const [showDeletePopup, setShowDeletePopup] = React.useState(false);
  const [showEditPopup, setShowEditPopup] = React.useState(false);


  const handleDelete = () => {
    setShowDeletePopup(true);
  };
  const handleEdit = () => {
    setShowEditPopup(true);
  };

  const handleEditConfirmation = () => {
    setShowEditPopup(false);
  };
  const handleDeleteConfirmation = () => {
    setShowDeletePopup(false);
  };

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="flex items-center justify-between w-full py-4">
        <h1 className="font-bold ml-64 pl-4 mt-10" style={{ fontSize: '2.5rem' }}>Scenario List</h1>
        <div className="flex items-center space-x-4">
          <div className="logout flex items-center justify-start mr-10 mt-10">
            <div className='icons flex mx-2 ml-auto'>
              <FaUser className='text-black-400 text-2xl mx-2 ' />
              <FaBell className='text-black-400 text-2xl mx-2 ml-12' />
            </div>
            <div className="flex items-center gap-10 ml-24 pr-28">
              <div className="flex w-[120px] h-[40px] items-center justify-center gap-[10px] p-[10px] relative bg-[#cccc] rounded-[8px] mr-4">
                <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#fbf9f9] text-[14px] text-center tracking-[0] leading-[normal]">
                  Log out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-4 py-4 ml-auto pr-44 ml">
        <h2 className="font-bold" style={{ fontSize: '1.5rem', marginRight: 'auto' }}>Category :</h2>
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded px-2 py-1" >
            <option value="option1">Bill Of Rights </option>
            <option value="option2"> Finance Bill</option>
          </select>
          <button className="bg-orange-500 text-white px-4 ml-4 py-2 ml-8 rounded">
            + Add
          </button>
        </div>
      </div>
      <p className="text-2xl w-full px-40 py-2 ml-64 pl-32">
        Our list of scenarios displayed here on the bill of rights category
      </p>
      <div className="flex space-x-32 py-4 pl-24 mx-6 pt-20 mt-10">
        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 object-cover"
            src='/images/image 3.svg'
            alt="Scenario 1"
          />
          <p className="text-sm font-bold mt-6">Title: Right to Life</p>
          <p className="text-xs">Level: 1</p>
          <div className="flex space-x-2">
            <button className="bg-orange-500 text-white px-2 py-1 ml-5 rounded" onClick={handleDelete}>
              Delete
            </button>
            <button className="bg-orange-500 text-white px-2 py-1 rounded" onClick={handleEdit}>
                Edit
              </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 object-cover"
            src='/images/image 4.svg'
            alt="Scenario 2"
          />
          <p className="text-sm font-bold mt-2">Title: Right to Liberty</p>
          <p className="text-xs">Level: 2</p>
          <div className="flex space-x-2 mt-2">
            <button className="bg-green-500 text-white px-2 py-1 ml-4 rounded" onClick={handleDelete}>
              Delete
            </button>
            <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleEdit}>
                Edit
              </button>
         
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 object-cover"
            src='/images/image 5.svg'
            alt="Scenario 3"
          />
          <p className="text-sm font-bold mt-2">Title: Right to Worship</p>
          <p className="text-xs">Level: 3</p>
          <div className="flex space-x-2 mt-2">
            <button className="bg-purple-500 text-white px-2 py-1 rounded" onClick={handleDelete}>
              Delete
            </button>
           
              <button className="bg-purple-500 text-white px-2 py-1 rounded" onClick={handleEdit}>
                Edit
              </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 object-cover"
            src='/images/image 6.svg'
            alt="Scenario 4"
          />
          <p className="text-sm font-bold mt-2">Title: Right to Equality</p>
          <p className="text-xs">Level: 4</p>
          <div className="flex space-x-2 mt-2">
            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={handleDelete}>
              Delete
            </button>
            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={handleEdit}>
                Edit
              </button>
         
            <EditModal
        isOpen={showEditPopup}
        onClose={() => setShowEditPopup(false)}
        onEdit={handleEditConfirmation}
      />
          </div>
        </div>
      </div>
      <DeleteModal
        isOpen={showDeletePopup}
        onClose={() => setShowDeletePopup(false)}
        onDelete={handleDeleteConfirmation}
      />
    </div>
  );
};

export default ScenarioListPage;
