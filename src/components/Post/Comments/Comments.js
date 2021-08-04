// @flow strict
import React from 'react';
import {Disqus} from 'gatsby-plugin-disqus';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  postTitle: string,
  postSlug: string
};

const Comments = ({ postTitle, postSlug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <Disqus
        url={url}
        identifier={postTitle}
        title = {postTitle}
      />
  );
};

export default Comments;
