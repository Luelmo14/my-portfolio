import React, { useState } from "react";
import LoadingSpinner from "../../modules/loading-spinner/LoadingSpinner";

const ThesisViewer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      <iframe
        src="/my-portfolio/thesis.pdf"
        className="w-full h-full"
        title="Thesis PDF"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ThesisViewer;
