import './RecipeSource.css';

const websiteRegex = /:\/\/(.*?)\//;

function RecipeSource({ sourceType, location, details }) {
  function displaySource() {
    switch (sourceType.toLowerCase()) {
      case 'website': {
        const formattedLocation = websiteRegex.exec(location)[1];

        return (
          <a
            className="location"
            onClick={(e) => e.stopPropagation()}
            href={location}
            target="_blank"
          >
            {formattedLocation}
          </a>
        );
      }
      case 'book': {
        return (
          <span className="location">
            {location} - {details}
          </span>
        );
      }
      default: {
        return <span className="location">{location}</span>;
      }
    }
  }

  return (
    <div className="attribute">
      <span className="label">Source</span>:&nbsp;
      {displaySource()}
    </div>
  );
}

export default RecipeSource;
