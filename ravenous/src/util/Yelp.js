const apiKey =
  "8otikmd1C4Tq7lg2Bi8nf1xaeSPM1H8oqac4J5EUAT_3-ZeX0ICliX_6hWZLJYET_ZYNIoMN5RukRicvrmo4KNI_RVwEyYqNcJ_JGpPyqusGqq_pHTnIMByRg3xvX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        if (jsonRes.businesses) {
          return jsonRes.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};

export default Yelp;
