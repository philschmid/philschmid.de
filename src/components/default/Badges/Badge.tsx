import React from 'react';
import ColabBadge from '../../../assets/badges/Colab.Badge';
import GithubBadge from '../../../assets/badges/Github.Badge';

const badges = {
  github: GithubBadge,
  colab: ColabBadge,
};

export default function Badge({name, url}) {
  const Badge = badges[name];
  return (
    <a target="_blank" rel="noopener" aria-label={`Link to ${url}`} href={url}>
      <Badge />
    </a>
  );
}
