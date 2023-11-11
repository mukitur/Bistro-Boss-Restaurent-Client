import { Helmet } from 'react-helmet-async';

const TitleHelmet = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default TitleHelmet;
