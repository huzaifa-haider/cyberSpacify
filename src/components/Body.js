import React, { useEffect, useState } from 'react';
import Card from './Card';
import { readExcel } from './readExcel';

function Body() {
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    const fetchExcelData = async () => {
        const data = await readExcel('/links-data.xlsx');

      setLinksData(data);
    };

    fetchExcelData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {linksData.map((link, index) => (
          <Card
            key={index}
            title={link['Link Title']}
            description={link['Description']}
            link={link['Link']}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;


