###
Hi! Managed to get everything working except for the Docker and Kubernetes. I was planning on using the remaining time on refreshing my knowledge on Docker but didn't expect to get stuck with the crypto icons. 

## What to expect
- Responsive
- RTL support
- Google Translation
- Data are shown via cards

## How to use
After pulling the repository, make sure to run `npm install` to get all dependencies needed to get the app running. Once done, hit `npm run dev`. This should now point to `http://localhost:3000`. 

On load of the page should show all the cards provided by the crypto URL provided. 

On the upper right of the screen (header), you should see a couple of icons. First is the google translator. I used an inline script to speed it up instead of using i18n. Next is the RTL button. On click of the button should properly change the layout of the website. Lastly, the theme button. It's a simple implementation of dark mode. Found on the upper left is a dummy icon.