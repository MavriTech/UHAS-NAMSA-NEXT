import React from "react";
import "@styles/loading.css";

const Loading = () => {
  return (
    <div class="spinner-container">
      <div class="spinner">
        <div class="spinner">
          <div class="spinner">
            <div class="spinner">
              <div class="spinner">
                <div class="spinner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
