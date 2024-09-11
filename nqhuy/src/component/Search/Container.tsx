import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './style.css';
import tinh_tp from '../../data/tinh_tp.json';
import quan_huyen from '../../data/quan_huyen.json';
 
interface SearchCriteria {
  province: string;
  district: string;
  priceRange: string;
  size: string;
}
 
interface SearchFormProps {
  onSearch: (criteria: SearchCriteria) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [province, setProvince] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [filteredDistricts, setFilteredDistricts] = useState<any[]>([]);
  const [priceRange, setPriceRange] = useState<string>('');
  const [size, setSize] = useState<string>('');

  console.log('filteredDistricts',filteredDistricts);

 
  

  useEffect(() => {
    if (province) {
      const districtList = Object.values(quan_huyen).filter(d => d.parent_code === province);
      setFilteredDistricts(districtList);
    } else {
      setFilteredDistricts([]);
    }
  }, [province]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onSearch({ province, district, priceRange, size });
  };

  return (
    <form className='form-search' onSubmit={handleSearch}>
      <div className='province'>
        <label>Tỉnh/Thành:</label>
        <select value={province} onChange={(e: ChangeEvent<HTMLSelectElement>) => setProvince(e.target.value)}>
          <option value="">Chọn Tỉnh/Thành</option>
          {Object.entries(tinh_tp).map(([key, val]) => (
            <option key={key} value={key}>{val.name_with_type}</option>
          ))}
        </select>
      </div>
      <div className='districd'>
        <label>Quận/Huyện:</label>
        <select value={district} onChange={(e: ChangeEvent<HTMLSelectElement>) => setDistrict(e.target.value)}>
          <option value="">Chọn Quận/Huyện</option>
          {filteredDistricts.map(d => (
            <option key={d.code} value={d.code}>{d.name_with_type}</option>
          ))}
        </select>
      </div>
      <div className='price_search'>
        <label>Khoảng giá:</label>
        <select value={priceRange} onChange={(e: ChangeEvent<HTMLSelectElement>) => setPriceRange(e.target.value)}>
          <option value="">Chọn Khoảng Giá</option>
          <option value="1">Dưới 5 triệu</option>
          <option value="2">5 - 10 triệu</option>
          <option value="3">Trên 10 triệu</option>
        </select>
      </div>
      <div className='size'>
        <label>Diện tích:</label>
        <select value={size} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSize(e.target.value)}>
          <option value="">Chọn Diện tích</option>
          <option value="1">Dưới 50m²</option>
          <option value="2">50 - 100m²</option>
          <option value="3">Trên 100m²</option>
        </select>
      </div>
      <div><button type="submit">Lọc tin</button></div>
    </form>
  );
};

export default SearchForm;
