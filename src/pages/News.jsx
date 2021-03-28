import React  from 'react';
import {
  useParams
} from "react-router-dom";

import { NewsList } from '../components/news-list/NewsList';


export function NewsPage() {
  const id = useParams().id;
  return (  
    <NewsList flokk = {id}></NewsList>
);
}