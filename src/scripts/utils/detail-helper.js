const DetailHelper = {
  eachFoodsMenu({ foods }) {
    let foodsString = '';
    foods.forEach((food) => {
      foodsString += `<li class="menu-item">${food.name}</li>`;
    });
    return foodsString;
  },

  eachDrinksMenu({ drinks }) {
    let drinksString = '';
    drinks.forEach((drink) => {
      drinksString += `<li class="menu-item">${drink.name}</li>`;
    });
    return drinksString;
  },
  eachCustomersReview(customerReviews) {
    let customerReviewsString = '';
    customerReviews.forEach((customerReview) => {
      customerReviewsString += `
      <li class="item-list-review detail-card">
          <p class="reviewName">${customerReview.name}<span class="reviewDate"> &bull; ${customerReview.date}</span></p>
          <p class="reviewText">${customerReview.review}</p>
      </li>
  `;
    });

    return customerReviewsString;
  },
};

export default DetailHelper;
