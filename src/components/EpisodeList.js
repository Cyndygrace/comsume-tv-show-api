import React from 'react';

const EpisodeList = (props) => {
  return (
    <div className="mt-4 mb-2">
      {props.episodeArray.map((item, index) => {
        return (
          <div
            key={index}
            className="card mb-3 mx-auto"
            style={{ maxWidth: '1080px' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  key={index}
                  src={item.image.medium}
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 key={index} className="card-title">
                    Episode {item.number} : {item.name}
                  </h5>
                  Description: {item.summary}
                  <p key={index} className="card-text">
                    <small className="text-muted">
                      Release Date: {item.airdate}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EpisodeList;
