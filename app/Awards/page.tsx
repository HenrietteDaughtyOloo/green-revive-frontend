'use client'
import React, { useState } from 'react';
import { Card, LockedCard } from '../Atom/gameCards';
import DeletePopup from '../DeletePopUp/index';
import EditPopup from '../PopUpEdit/index';

const Awards: React.FC = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

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
    <div className="flex justify-center items-center overflow-hidden">
      <div className='grid grid-cols-3 gap-20'>
        <Card
          imageUrl="Images/starts.png"
          title="Beginner"
          description="Description goes here."
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
        />
        <Card
          imageUrl="Images/stars.jpg"
          title="Master"
          description="Description goes here."
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
        />
        <Card
          imageUrl="Images/start.jpg"
          title="Bingo"
          description="Description goes here."
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
        />
        <Card
          imageUrl="Images/started.png"
          title="Law Guru"
          description="Description goes here."
          onDeleteClick={handleDelete}
          onEditClick={handleEdit}
        />
        <LockedCard
          imageUrl="Images/Vector.png"
          title=""
          description="Description goes here."
        />
        <LockedCard
          imageUrl="Images/Vector.png"
          title="Title"
          description="Description goes here."
        />
      </div>
      {showDeletePopup && (
        <DeletePopup
          onClose={() => setShowDeletePopup(false)}
          onDelete={handleDeleteConfirmation}
          isOpen={showDeletePopup} // Set isOpen to show the modal
        />
      )}
      {showEditPopup && (
        <EditPopup
          onClose={() => setShowEditPopup(false)}
          onEdit={handleEditConfirmation}
          isOpen={showEditPopup} // Set isOpen to show the modal
        />
      )}
    </div>
  );
};

export default Awards;
