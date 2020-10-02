import React from 'react';
import GithubIcon from '../../../assets/icons/social/Github.Icon';
import InstagramIcon from '../../../assets/icons/social/Instagram.Icon';
import LinkedinIcon from '../../../assets/icons/social/LinkedIn.Icon';
import MediumIcon from '../../../assets/icons/social/Medium.Icon';
import TwitterIcon from '../../../assets/icons/social/Twitter.Icon';

import GithubIconBig from '../../../assets/icons/socialBig/Github.Icon';
import InstagramIconBig from '../../../assets/icons/socialBig/Instagram.Icon';
import LinkedinIconBig from '../../../assets/icons/socialBig/LinkedIn.Icon';
import MediumIconBig from '../../../assets/icons/socialBig/Medium.Icon';
import TwitterIconBig from '../../../assets/icons/socialBig/Twitter.Icon';

const icons = {
  Twitter: TwitterIcon,
  Github: GithubIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
  Medium: MediumIcon,
};
const iconsBig = {
  Twitter: TwitterIconBig,
  Github: GithubIconBig,
  Instagram: InstagramIconBig,
  LinkedIn: LinkedinIconBig,
  Medium: MediumIconBig,
};

export default function Social({url, name, size}) {
  const Icon = size === 'large' ? iconsBig[name] : icons[name];
  return (
    <a
      target="_blank"
      rel="noopener"
      data-a11y="false"
      aria-label={`Link to ${url}`}
      href={url}
      className="text-gray-1"
    >
      <Icon />
      <span className="hidden">Link to ${url}</span>
    </a>
  );
}
