import {   FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import c from './assets/c.png';
import cpp from './assets/cpp.png';
import java from './assets/java.png';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/javascript.png';
import reacticon from './assets/react.png';
import redux from './assets/redux.png';
import nodejs from './assets/nodejs.png'
import talwind from './assets/talwind.png';
import express from './assets/expressjs.png';
import mongo from './assets/mongo.png';
import work1 from "./assets/crypto.png";
import work2 from "./assets/talksocket.png";
import work3 from "./assets/omnifood.png";
import work4 from './assets/travelpage.png';
import work5 from './assets/bankist.png';
import work6 from './assets/expkart.png';


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaGithub />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Anurag Mohan"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "6206396234"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "anuragmohan2022@gmail.com"
  }
]

export const icons = [c, cpp, java, html, css, js , reacticon, redux, talwind,express, mongo, nodejs]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Learning Web Developement",
    company: "codingNinjas"
  },
  {
    di: 2,
    year: "2022",
    position: "Started Web Development",
  
  },
  {
    id: 3,
    year: "2021",
    position: "Started My Coding journey",
  
  }
]
export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Self-Learning"
  },
  {
    id: 2,
    number: "50+",
    itemName: "Mini projects"
  },
  {
    id: 3,
    number: "5+",
    itemName: "Major Projects"
  },

]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    git:"https://github.com/anurag-10-git/crypto-hunter",

  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    git:"https://github.com/anurag-10-git/TalkSocket-chat-app",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    git:"https://github.com/anurag-10-git/omnifood",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
    git:"https://github.com/anurag-10-git/tours-and-travel-page-frontend",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app',
    git:"https://github.com/anurag-10-git/Bankist-learning-js",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    git:"https://github.com/anurag-10-git/ExpKart-eCommerce-website",
  }
]


export const workNavs = [
  
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Bangalore, Karnataka"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "anuragmohan2022@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-6206396234"
  }
]
