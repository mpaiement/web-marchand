
import { Header } from '../articles/components/NavBar.jsx'; // Assurez-vous que le chemin est correct

import { Card } from './components/Card.jsx';
import {Footer} from '../../layout/Footer.jsx';
  const ArticlesIndex = ({}) => {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
      {/* <ProductCard/> */}
      {/* <main style={{minHeight :"80ev"}}>{children}</main> */}
      
      {/* <h2>Footer</h2> */}
    </div>
  );
};

// index.propTypes = {
//   children: PropTypes.node.isRequired,
//   color: PropTypes.node.isRequired,
// };
export default ArticlesIndex;
