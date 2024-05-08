import React, { useState, useEffect } from 'react';
import { getCall } from '../App/api_method';
import CardView from './CardView';
import InfiniteScroll from 'react-infinite-scroll-component';
import { lazy,Suspense } from 'react';
import UserLoader from '../component/UserLoader';
const FetchData = () => {
    const [data, setData] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const result = await getCall("/get_files");
      
                if (result.data && Array.isArray(result.data.image_files)) {
                    setLoading(false)
                    setData(result.data.image_files);
                } else {
                    console.error("Data received from the API is not in the expected format:", result.data);
                    setLoading(false)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false)
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchImageUrls = async () => {
            try {
                const urls = await Promise.all(data.map(item => base64ToImage(item.image_content)));
                setImageUrls(urls);
            } catch (error) {
                console.error("Error fetching image URLs:", error);
            }
        };

        fetchImageUrls();
    }, [data]);

    async function base64ToImage(base64String) {
        return new Promise((resolve, reject) => {
            const byteCharacters = atob(base64String);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/png' });

            const url = URL.createObjectURL(blob);
            resolve(url);
        });
    }

    return (
 <>
       <UserLoader isLoading={loading}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-5 mt-44 pr-43">
            
            {imageUrls.map((url, ind) => (
                
                <CardView key={ind} impath={url} title={data[ind].title} description={data[ind].description}/>
            ))}
           
        </div>
 </>
        
    );
}

export default FetchData;
