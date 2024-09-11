import React, { useState } from 'react';
import SearchForm from './component/Search';
import Postlist from './component/Post';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChartPage from './component/Chart';

interface SearchCriteria {
  province: string;
  district: string;
  priceRange: string;
  size: string;
}

const App: React.FC = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    province: '',
    district: '',
    priceRange: '',
    size: ''
  });

  const handleSearch = (criteria: SearchCriteria) => {
    setSearchCriteria(criteria);
    console.log(searchCriteria);
  };

  console.log(searchCriteria);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<><SearchForm onSearch={handleSearch} />
          <Postlist searchCriteria={searchCriteria} /></>}
        />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
