import RatingSystem from './RatingSystem';
import './TestPage.css';

export default function TestPage() {
  return (
    <div className="container">
      <h1>Test Page</h1>
      <RatingSystem currentRating={0} maxRating={5} />
    </div>
  );
}
