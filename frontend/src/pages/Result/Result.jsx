import React, { useState, useEffect } from "react";
import "./result.css";
import Layout from "../../component/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINTS } from "../../api/Endpoints";
//import ProductCard from "../../component/common/Card/ProductCard";

function Result() {
  const { id } = useParams();
  const [resultData, setResultData] = useState([]); // Array እንዲሆን [] አድርገው
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // API ጥያቄ እዚህ ይላካል
        const res = await axios.get(`${API_ENDPOINTS}/${id}`);

        // ከ Amazon API የሚመጣው ዳታ መዋቅር ይለያያል
        // እንደ አስፈላጊነቱ res.data.products ወይም res.data ብቻ አድርገው
        setResultData(res.data);
      } catch (err) {
        console.error("API Error Details:", err);
        setError("ዳታውን ማግኘት አልተቻለም። እባክዎ ኢንተርኔትዎን ቼክ ያድርጉ።");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Layout>
      <div className="result-container">
        <h1>ለ "{id}" የተገኙ ውጤቶች</h1>

        {loading && <p className="loading">በመጫን ላይ... እባክዎ ይጠብቁ።</p>}

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        {!loading && !error && resultData.length > 0 ? (
          <div className="products-grid">
            {/* ዳታውን ወደ ካርድ መቀየር */}
            {resultData.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
        ) : (
          !loading && !error && <p>ምንም ውጤት አልተገኘም።</p>
        )}
      </div>
    </Layout>
  );
}

export default Result;
