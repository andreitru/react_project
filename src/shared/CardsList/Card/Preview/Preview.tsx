import React from 'react';
import styles from './preview.less';

interface IPreviewProps {
  thumbnail: string;
  banner: { banner_img: string };
}

export function Preview({thumbnail, banner}: IPreviewProps) {
  let content;
  if (thumbnail.split('://')[0] === 'https') {
    content = <img src={thumbnail}
                   alt="preview"
                   className={styles.previewImg}/>
  } else if (banner.banner_img) {
    content = <img src={banner.banner_img}
                   alt="preview"
                   className={styles.previewImg}/>
  }

  return (
    <div className={styles.preview}>
      {content}
    </div>
  );
}
