import React from 'react';

export default function AuthorTechnology() {
  return (
    <div className="md:col-span-2 text-justify  space-y-8 border-t-2 border-gray-1 w-full pt-8">
      <p>
        I believe that one should not have a fixed technology stack, but should always respond to the needs and problems
        of the customer. Below is just an excerpt and my favorite technologies in machine learning, cloud and non-ML
        frameworks.
      </p>
      <div>
        <h3>🤖 Machine Learning </h3>
        <p>
          Pytorch, Pytorch-lightning, Huggingface Transformers, PyCaret, Scikit-Learn, Tensorflow, Weights & Bias,
          Optuna, Pandas, Numpy
        </p>
      </div>
      <div>
        <h3>☁️ Cloud </h3>
        <p>AWS, GCP, Azure, Kubernetes, Kubeflow, Docker, Terraform, Github Actions, Serverless Framework</p>
      </div>
      <div>
        <h3>🏗️ Non-ML Frameworks </h3>
        <p>React, Vue, React-Native, LitElement, GraphQL, Gatsby, TailwindCSS</p>
      </div>
    </div>
  );
}
