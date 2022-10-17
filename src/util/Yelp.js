const api_key = "EBx9xNrw-ULkIT_bGO8oyVAsm7tfm-bQ6_b1OdxV8HfV1h6IeWBo3Beh9ALPl-YypB9dzs1BR6NtFjGIZ4HU8fe_1QhTIcSMKuY72r4XGt8VGtJ8pSW1zuBgFqJNY3Yx";

export const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        }).then((response)=>{
            return response.json();
        }).then((jsonResponse)=>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business =>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.adress1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
};