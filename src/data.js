import { nanoid } from "nanoid"
import linkedIn from './assets/Frame.svg'
import github from './assets/GitHub.svg'
import chill from './assets/Vector1.svg'
import twitter from './assets/Vector2.svg'
import media from './assets/Vector3.svg'

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