'use client'

import { useRouter } from "next/navigation";
import { Header } from "./components/Header/Header";
import { CategoriesList } from "./components/CategoriesList/CategoriesList";
import { NewApps } from "./components/NewApps/NewApps";
import { CardList } from "./components/CardList/CardList";

export default function Home() {
  const router = useRouter();
  if (localStorage.getItem('begin') === null) {
    router.push('/begin')
  }
  return (
    <>
      <Header />
      <NewApps />
      <CategoriesList />
      <CardList />
    </>
  )
}
