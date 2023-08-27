import {React,useState} from 'react';
import { CButton , CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import PreviewModal from './PreviewModal';
import './pdfPage.css';

const cardsData = [
  {
    id: 1,
    imageSrc: "https://picsum.photos/800/400",
    title: "Power of Attorney (POA)",
    text: "A power of attorney or letter of attorney is a written authorization to represent or act on another's behalf in private affairs, business, or some other legal matter."
  },
  {
    id: 2,
    imageSrc: "https://picsum.photos/800/400",
    title: "Application for Child Custody",
    text: "In case of a minor child, both the parents have an equal right over the child after divorce."
  },
  {
    id: 3,
    imageSrc: "https://picsum.photos/800/400",
    title: "Partnership Agreements",
    text: "A Partnership is defined by the Indian Partnership Act, 1932, as ‘the relation between persons who have agreed to share profits of the business carried on by all or any of them acting for all’. Agreement is the essential part of partnership business. It secure the right of both party. "
  },
  {
    id: 4,
    imageSrc: "https://picsum.photos/800/400",
    title: "Hire Purchase Agreements",
    text: "A contract of hire, is governed by the provisions of Chapter IX of the Indian Contract Act. It usually covers the common day finance agreements like purchase of consumer durables like Motor Vehicles, Computers, Household appliances like Televisions, Refrigerators etc."
  },
  {
    id: 5,
    imageSrc: "https://picsum.photos/800/400",
    title: "Legal Notice",
    text: "A legal notice is a written communication that the affected party sends to the opposing party, informing them of the legal action they plan to take against them."
  },
  {
    id: 6,
    imageSrc: "https://picsum.photos/800/400",
    title: "Wills",
    text: "A will or testament, also known as Vasiyat, is a legal declaration by which a person, the testator, names one or more persons to manage his or her estate and provides for the distribution of his or her property at death. For the devolution of property not disposed of by will, see inheritance and intestacy."
  },
  {
    id: 7,
    imageSrc: "https://picsum.photos/800/400",
    title: "Legal Settlements",
    text: "In law, a settlement is a resolution between disputing parties about a legal case, reached either before or after court action begins. A collective settlement is a settlement of multiple similar legal cases."
  },
  {
    id: 8,
    imageSrc: "https://picsum.photos/800/400",
    title: "Affidavit",
    text: "An affidavit is a written sworn statement of fact voluntarily made by an affiant or deponent under an oath or affirmation administered by a person authorized to do so by law."
  }

];


const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substr(0, maxLength) + '...';
  }
  return text;
};

const PdfPage = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleExpandCard = (cardId) => {
    setExpandedCardId(cardId === expandedCardId ? null : cardId);
  };

  return (
    <div className="pdf-page-container">
      <CRow xs={{ cols: 3 }} md={{ cols: 3 }} lg={{ cols: 4 }} className="custom-card-row">
        {cardsData.map(card => (
          <CCol key={card.id} xs={12} md={4} className="custom-card-col">
            <CCard className="custom-card">
              <CCardImage orientation="top" src={card.imageSrc} className="custom-card-image" />
              <CCardBody>
                <CCardTitle>{card.title}</CCardTitle><hr/>
                <CCardText>
                  {expandedCardId === card.id ? card.text : truncateText(card.text, 80)}
                  {card.text.length > 50 && (
                    <span
                      className="expand-link"
                      onClick={() => toggleExpandCard(card.id)}
                    >
                      {expandedCardId === card.id ? 'Read Less' : 'Read More'}
                    </span>
                  )}
                </CCardText>
                <CButton color="info" className="preview-button">Preview</CButton>
                <CButton color="success" className="download-button">Download</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default PdfPage;