import React, { FunctionComponent } from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';

import { MyDocument } from './MyDocument';


const App: FunctionComponent = () => {
  return (
    <>
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="movielist.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        Download Pdf
      </PDFDownloadLink>
    </>
  );
};

export default App;
