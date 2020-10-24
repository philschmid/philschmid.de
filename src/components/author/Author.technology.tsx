import React from 'react';

export default function AuthorTechnology({technologies}) {
  return (
    <div className="md:col-span-2 text-justify  space-y-8 md:border-t-2 border-gray-1 w-full md:pt-8">
      <p>{technologies.description}</p>
      <div>
        <h3>🤖 Machine Learning </h3>
        <p>{technologies.machineLearning.join(', ')}</p>
      </div>
      <div>
        <h3>☁️ Cloud </h3>
        {technologies.cloud.join(', ')}
      </div>
      <div>
        <h3>🏗️ Non-ML Frameworks </h3>
        {technologies.nonMLFramework.join(', ')}
      </div>
    </div>
  );
}
