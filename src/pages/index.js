import Head from "next/head";
import Script from "next/Script";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Service from "@/components/Service";
import Skill from "@/components/Skill";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
     
      <main>
        <Header />
        <Banner />
        <About />
        <Service />
        <Skill />
        <Portfolio />
        <Footer />

        <Script type="text/javascript" src="../../assets/js/jquery-3.3.1.min.js"/>
        
        <Script src="/main.js"/>
        <Script type="text/javascript" src="../../assets/js/jquery-1.7.2.js"/>
        <Script type="text/javascript" src="../../assets/js/jquery.quicksand.js"/>
        
      </main>
    </>
  );
}
