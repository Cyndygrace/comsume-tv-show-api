import React from "react";

const EpisodeList = (props) => {
  const movie = JSON.parse(localStorage.getItem("res"));
  const defaultImage =
    movie.image != null && typeof movie.image == "object"
      ? movie.image.medium
      : movie.image;
  return (
    <div className="mt-4 mb-2">
      {props.episodeArray.length > 0
        ? props.episodeArray.map((item, index) => {
            return (
              <div
                key={index}
                className="card mb-3 mx-auto"
                style={{ maxWidth: "1080px" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      key={index}
                      src={
                        item.image != null && typeof item.image == "object"
                          ? item.image.medium
                          : item.image != null
                          ? item.image
                          : defaultImage
                      }
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 key={index} className="card-title">
                        Episode {item.number} : {item.name}
                      </h5>
                      Description: {item.summary || "N/A"}
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
          })
        : "Loading"}
    </div>
  );
};

export default EpisodeList;
