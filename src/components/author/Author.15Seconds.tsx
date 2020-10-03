import React from 'react';
import SocialList from '../default/Social/Social.List';

export default function Author15Seconds({meIn15Seconds}) {
  return (
    <div className="md:col-span-2 text-justify  space-y-6">
      {meIn15Seconds.map((text) => (
        <p>{text}</p>
      ))}
      <div>
        <SocialList size={'large'} />
      </div>
    </div>
  );
}
