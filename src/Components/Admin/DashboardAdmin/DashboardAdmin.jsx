import React, { useState } from 'react';
import './DashboardAdmin.css';
import ImageGallery from '../../Admin/ImageGallery/ImageGallery'
import ImageSlider from '../../Admin/ImageSlider/ImageSlider' 
import ReviewImageGallery from '../ReviewImageGallery/ReviewImageGallery';
import FAQ from '../FAQ/FAQ';

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('Slider');

  const renderContent = () => {
    switch (activeSection) {
      case 'Slider':
        return (
          <div>
            <h2>Slider Management</h2>
            <ImageSlider />
            <ImageGallery />
          </div>
        );
      case 'Reviews':
 return (
          <div>
            <h2>Reviews</h2>
           <ReviewImageGallery />
          </div>
        );      case 'FAQ':
         return (
          <div>
            <h2>Faq</h2>
            <FAQ />
          </div>
        );
      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3 className="sidebar-title">Admin Panel</h3>
        <ul className="sidebar-menu">
          <li
            className={activeSection === 'Slider' ? 'active' : ''}
            onClick={() => setActiveSection('Slider')}
          >
            Slider
          </li>
          <li
            className={activeSection === 'Reviews' ? 'active' : ''}
            onClick={() => setActiveSection('Reviews')}
          >
            Reviews
          </li>
          <li
            className={activeSection === 'FAQ' ? 'active' : ''}
            onClick={() => setActiveSection('FAQ')}
          >
            FAQ Questions
          </li>
        </ul>
      </div>

      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default AdminDashboard;
