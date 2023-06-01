import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ foto }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={foto.webformatURL}
        alt={foto.tags}
      />
    </li>
  );
};
