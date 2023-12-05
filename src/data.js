import { nanoid } from "nanoid"
import linkedIn from './assets/Frame.svg'
import github from './assets/GitHub.svg'
import chill from './assets/Vector1.svg'
import twitter from './assets/Vector2.svg'
import media from './assets/Vector3.svg'
import aweSomeBk from './assets/awesomeBooks.png'
import math from './assets/math.jfif'
import crypto from './assets/crypto.jfif'

export const navData = [{id: nanoid(), name: 'Portfolio'}, 
                        {id: nanoid(), name: 'About'}, 
                        {id: nanoid(), name: 'Contact'}]
export const identify = 'Abdul Nganje'

export const socials = [
                        {id: nanoid(), name: linkedIn, url: 'https://www.linkedin.com/in/abdulrahman-nganje/'},
                        {id: nanoid(), name: github, url: 'https://github.com/asnganje'},
                        {id: nanoid(), name: chill, url: 'https://venture.angellist.com/v/abdulrahman-nganje/i/abdulrahman-nganje/portfolio'},
                        {id: nanoid(), name: twitter, url: 'https://twitter.com/asnganje'},
                        {id: nanoid(), name: media, url: 'https://github.com/asnganje'},
                    ]

export const projects = [
                        {id:3, 
                        url:"https://asnganje.github.io/awesomebookES6/", 
                        title: "Awesome Books",
                        icon: aweSomeBk, 
                        description: "This project is about a website that displays display a list of books added by a user. It allows one to add and remove books from that list. It was built using plain HTML, CSS, and JavaScript.",
                        skills: ["html", "css", "javascript"]
                        },
                        {id:2, 
                        url:"https://phenomenal-sunflower-40c413.netlify.app/", 
                        title: "Math Magicians",
                        icon: math, 
                        description: "A website that allows users to do simple calculations and read a math quote. Built with: React.js, JavaScript, CSS3 and HTML5.",
                        skills: ["ReactJs", "javascript", "html", "css"]
                        },
                        {id:1, 
                            url:"https://clever-macaron-458f7d.netlify.app/", 
                            title: "Global Cryptocurrency",
                            icon: crypto, 
                            description: "This project entails a React-Redux application that fetches digital currency data from a coins API. It allows users to filter information by different types of digital coins.",
                            skills: ["ReactJs", "javascript", "html", "css"]
                        },
                        {id:4, 
                            url:"https://github.com/asnganje/space-travelers", 
                            title: "Space Travellers",
                            icon: math, 
                            description: "A web application for a company that provides commercial and scientific space travel services. The application utilises SpaceX API to allow users to book rockets and join selected space missions.",
                            skills: ["ReactJs", "javascript", "html", "css"]
                        }
                    ]