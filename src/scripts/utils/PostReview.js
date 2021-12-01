import RestaurantDBSource from '../data/RestaurantDBSource';
import '../views/components/AppReviewCard';

const PostReview = {
  async onPostReview(dataReview) {
    const listReviews = document.querySelector('#reviewList');
    listReviews.innerHTML = 'Loading...';
    try {
      const response = await RestaurantDBSource.postReviewRestaurant(dataReview);
      response.customerReviews.forEach((review) => {
        const cardItemReview = document.createElement('app-reviewcard');
        cardItemReview.reviews = review;
        listReviews.append(cardItemReview);
      });
    } catch (message) {
      // eslint-disable-next-line no-alert
      alert('message');
    }
  },
};
export default PostReview;
