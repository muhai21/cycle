import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const snapshot = await getDocs(collection(db, 'products'));
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Our Products</h2>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}