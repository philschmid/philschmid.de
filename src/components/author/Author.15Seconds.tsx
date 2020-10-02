import React from 'react';
import SocialList from '../default/Social/Social.List';

export default function Author15Seconds() {
  return (
    <div className="md:col-span-2 text-justify  space-y-6">
      <p>Hello, my name is Philipp. I am 24 years old living in Nuremberg, Germany.</p>
      <p>Currently I am working as a machine learning engineer at technology incubation start up. </p>
      <p>
        At work design and implement cloud-native machine learning architectures for fin-tech and insurance companies.
      </p>
      <p>
        I found my passion for cloud concepts and machine learning 3 years ago. Since then I never stopped learning.
        Currently, I am focusing myself in the area NLP and how to leverage models like BERT, Roberta and GPT2 to
        generate business value.
      </p>
      <p>
        I love to design solution oriented, scalable, efficient architectures to solve real business problems. I believe
        that machine learning can support any company in any area at any time.
      </p>
      <p className="pb-6">
        I created this blog to share my knowledge and connect with people. Feel free to reach out to me on twitter or
        via email.
      </p>
      <SocialList size={'large'} />
    </div>
  );
}
