import React from "react"

import {
  FaApple,
  FaBandcamp,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTumblr,
  FaTwitter,
  FaYoutube,
  FaPatreon,
  FaPodcast,
} from "react-icons/fa"

let appleIcon = <FaApple focusable="false" aria-hidden="true" />
let bandcampIcon = <FaBandcamp focusable="false" aria-hidden="true" />
let globeIcon = <FaGlobe focusable="false" aria-hidden="true" />
let instagramIcon = <FaInstagram focusable="false" aria-hidden="true" />
let soundcloudIcon = <FaSoundcloud focusable="false" aria-hidden="true" />
let spotifyIcon = <FaSpotify focusable="false" aria-hidden="true" />
let tumblrIcon = <FaTumblr focusable="false" aria-hidden="true" />
let twitterIcon = <FaTwitter focusable="false" aria-hidden="true" />
let youtubeIcon = <FaYoutube focusable="false" aria-hidden="true" />
let facebookIcon = <FaFacebookF focusable="false" aria-hidden="true" />
let patreonIcon = <FaPatreon focusable="false" aria-hidden="true" />
let podcastIcon = <FaPodcast focusable="false" aria-hidden="true" />

const Icon = props => {
  switch (props.name) {
    case "twitter":
      return twitterIcon
    case "facebook":
      return facebookIcon
    case "instagram":
      return instagramIcon
    case "youtube":
      return youtubeIcon
    case "spotify":
      return spotifyIcon
    case "soundcloud":
      return soundcloudIcon
    case "applemusic":
      return appleIcon
    case "apple":
      return appleIcon
    case "bandcamp":
      return bandcampIcon
    case "tumblr":
      return tumblrIcon
    case "patreon":
      return patreonIcon
    case "podcast":
      return podcastIcon
    default:
      return globeIcon
  }
}

export default Icon
