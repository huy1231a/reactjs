import React, { useState, useEffect } from 'react';
import './style.css';
import data from '../../data/data.json';
 
interface Post {
  title: string;
  thumbnail: string;
  price: number;
  area: number;
  city: string;
  location: string;
  district: string;
  content: string;
}

interface SearchCriteria {
  province: string;
  district: string;
  priceRange: string;
  size: string;
}

interface PostlistProps {
  searchCriteria: SearchCriteria;
}

const Postlist: React.FC<PostlistProps> = ({ searchCriteria }) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(data);
  
  const formatNumberWithCommas = (price: number): string => {
    return price.toLocaleString('vi-VN'); 
  };

  useEffect(() => {
    const filterPosts = () => {
      let filtered = data;

      if (searchCriteria.province) {
        filtered = filtered.filter(post => post.city === searchCriteria.province);
      }

      if (searchCriteria.district) {
        filtered = filtered.filter(post => post.district === searchCriteria.district);
      }

      if (searchCriteria.priceRange) {
        filtered = filtered.filter(post => {
          const price = post.price;
          if (searchCriteria.priceRange === '1') return price < 5000000;
          if (searchCriteria.priceRange === '2') return price >= 5000000 && price <= 10000000;
          if (searchCriteria.priceRange === '3') return price > 10000000;
          return true;
        });
      }

      if (searchCriteria.size) {
        filtered = filtered.filter(post => {
          const area = post.area;
          if (searchCriteria.size === '1') return area < 50;
          if (searchCriteria.size === '2') return area >= 50 && area <= 100;
          if (searchCriteria.size === '3') return area > 100;
          return true;
        });
      }

      setFilteredPosts(filtered);
    };

    filterPosts();
  }, [searchCriteria]);

  console.log('filterPosts',filteredPosts);
  

  return (
    <div className='post_list'>
      <div>
        {filteredPosts.length === 0 ? (
          <p>Không có bài viết nào.</p>
        ) : (
          filteredPosts.map((post, index) => (
            <div key={index} className='post_list_details'>
              <div>
                <img src={post.thumbnail} alt={post.title} />
              </div>
              <div>
                <h4>{post.title}</h4>
                <p className='price'>Giá: {formatNumberWithCommas(post.price)} VND</p>
                <div>
                  <span>Diện tích: <span className='area'>{post.area} m²</span></span>
                  <span className='location_title'>Khu vực: <span className='location'>{post.location}</span></span>
                </div>
                <p>{post.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Postlist;
