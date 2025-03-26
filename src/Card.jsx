import { useState } from "react";
import QRCode from "react-qr-code";

function Card({ projectTitle, students, projectLink }) {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="card" onClick={() => setShowQR(!showQR)}>
      <h2>{projectTitle}</h2>
      <p> Presented by:</p>
      <div className="students-container">
        <div className="students-list">
          {students.map((student, index) => (
            <span key={index} className="student">
              {index + 1}. {student}
            </span>
          ))}
        </div>
      </div>

      {showQR && (
        <div className="qr-container">
          <QRCode value={projectLink} size={100} />
          <p className="qr-text">Scan to view project</p>
        </div>
      )}
    </div>
  );
}

export default Card;
