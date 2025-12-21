
import React from 'react'

const AddressSection = ({ currentContent, language, isVisible }) => {
  return (
    <section id="address" className={`address ${isVisible.address ? 'animate-in' : ''}`}>
      {/* <div className="section-header">
<h2 style={{ color: 'white' }}>
  {currentContent.address.title}
</h2>
        <div className="section-subtitle">{language === 'english' ? 'Where you can find me' : ''}</div>
      </div> */}
      <div className="address-content">
        <div className="address-card">
          <div className="address-icon">🏠</div>
          <div className="address-details">
            {currentContent.address.location ? (
              <div className="address-text">
                <p>{currentContent.address.location}</p>
              </div>
            ) : (
              <div className="address-structured">
                <div className="address-line">
                  <span className="address-label">{language === 'english' ? 'House:' : 'ઘર:'}</span>
                  <span className="address-value">{currentContent.address.houseName}</span>
                </div>
                <div className="address-line">
                  <span className="address-label">{language === 'english' ? 'Area:' : 'વિસ્તાર:'}</span>
                  <span className="address-value">{currentContent.address.area}</span>
                </div>
                <div className="address-line">
                  <span className="address-label">{language === 'english' ? 'Street:' : 'રસ્તો:'}</span>
                  <span className="address-value">{currentContent.address.street}</span>
                </div>
                <div className="address-line">
                  <span className="address-label">{language === 'english' ? 'City:' : 'શહેર:'}</span>
                  <span className="address-value">{currentContent.address.city}</span>
                </div>
                <div className="address-line">
                  <span className="address-label">{language === 'english' ? 'District:' : 'જિલ્લો:'}</span>
                  <span className="address-value">{currentContent.address.district}</span>
                </div>
                <div className="address-line">
                  <span className="address-label">{language === 'english' ? 'State:' : 'રાજ્ય:'}</span>
                  <span className="address-value">{currentContent.address.state}</span>
                </div>
                <div className="address-line">
                  <span className="address-label">{language === 'english' ? 'PIN Code:' : 'પિન કોડ:'}</span>
                  <span className="address-value">{currentContent.address.pincode}</span>
                </div>
                <div className="address-line">
                  <span className="address-label">{language === 'english' ? 'Country:' : 'દેશ:'}</span>
                  <span className="address-value">{currentContent.address.country}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="address-map-placeholder">
          <div className="map-icon">🗺️</div>
          <p>{language === 'english' ? 'Gondal, Gujarat, India' : 'ગોંડલ, ગુજરાત, ભારત'}</p>
        </div>
      </div>
    </section>
  )
}

export default AddressSection