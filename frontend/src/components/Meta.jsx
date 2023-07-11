import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Sinulid at Kawit',
  description: 'Providing the best quality and affordable crochet bags',
  keywords: 'crochet bags, semi-formal bags, crochet, knitting',
};

export default Meta;
