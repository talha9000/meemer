import React, { useState, useEffect } from 'react';
import { getCall } from '../App/api_method';
import CardView from './CardView';
import InfiniteScroll from 'react-infinite-scroll-component';
import { lazy,Suspense } from 'react';
import UserLoader from '../component/UserLoader';
import { useQuery } from 'react-query';
const FetchData = () => {
    const [curretData, setData] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [loading,setLoading]=useState(false)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true)
    //             const result = await getCall("/get_files");
      
    //             if (result.data && Array.isArray(result.data.image_files)) {
    //                 setLoading(false)
    //                 setData(result.data.image_files);
    //             } else {
    //                 console.error("Data received from the API is not in the expected format:", result.data);
    //                 setLoading(false)
    //             }
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //             setLoading(false)
    //         }
    //     };

    //     fetchData();
    // }, []);
    const getMeeme=async()=>{
        const result = await getCall("/get_files"); 
     
        return result.data
    }
    const {data,isLoading }=useQuery('fetch-meeme',getMeeme)

    useEffect(()=>{
        setLoading(isLoading)
        if (data && data.image_files) {
            setData(data.image_files); // Set curretData to the image_files array
           
        }
    },[data])
   
    useEffect(() => {
        const fetchImageUrls = async () => {
            try {
                setLoading(isLoading)
                const urls = await Promise.all(curretData.map(item => base64ToImage(item.image_content)));
                setImageUrls(urls);
            } catch (error) {
                console.error("Error fetching image URLs:", error);
            }
        };
    
        fetchImageUrls();
    }, [curretData]);
    

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 mt-10 lg:mx-20">
            
            {imageUrls.map((url, ind) => (
                
                <CardView key={ind} impath={url} title={curretData[ind].title} description={curretData[ind].description}/>
            ))}
           
        </div>
 </>
        
    );
}

export default FetchData;
