import axios from 'axios';
import Layout from '../components/Layout';
// import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';

export default function Home() {
  const downloadFileUrl =
    'https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg';

  return (
    <Layout title="Home page">
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <ProductItem product={product} key={product.slug} />
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              axios.get(downloadFileUrl).then((res) => console.log(res.data));
            }}
          >
            Download File
          </button>
          <a href={downloadFileUrl}>getFile</a>
        </div>
      </div>
    </Layout>
  );
}
