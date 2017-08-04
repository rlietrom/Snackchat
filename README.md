# SnackChat

Snackchat, a Horizons Hackathon project, was inspired by well known mobile application and an observation of the foodie community. Using the GoogleVision API, our app only lets users send photos if it recognizes the photo contain food!

## Demo

![alt text](https://github.com/EvanPeterson1324/horizons-hackathon-snackchat/blob/master/SnackChat-Demo.gif)


## Built using...

* Google Vision API
* React Native development with Expo
* Prototyping with Sketch and InVision
* MongoDB (backend storage)
* AWS S3 (image cloud storage)
* Express server: https://github.com/ryanclyde/snackchat-backend (deployed with Heroku)
* AJAX http requests
* Passport authentication

## Learning Points
Design Process
  This was the first time we've put real effort into the design process of making a 'consumer ready' product. We first made a few wireframes including every button, route, and feature we wanted the app to have. Next we made prototypes with attention to detail on the styling and colors we liked — we went with a minimal, flat UI that played with fun colors and brought about a little bit of class. This is a food app, anyway! After that, we exported the Sketch files to Invision to test out our intuitions about the user experience. Turning out styling goals into actual CSS took patience, time and nice tools like flexbox and CSS animations.
  
Google Vision API
  The API here was essential for realizing our vision of identifying what was in the pictures that our users took. What ended up being the most challenging part of it was getting it set up with the Google Vision Client, truthfully. Authentication required more than 8 keys and many tokens. G Cloud was hard to decipher. Once Google Vision was set up, we had to filter through the keywords that it gave us based on the image. If 'food' or 'beverage' was in the list, we allowed the image to be sent. 
  
Storage
  None of us had ever had to store images so it was a treat to find out that we needed to also use AWS on top of MongoDB. MongoDB only stores JSON objects and documents up to 16mb — image files are much bigger than that. Once we got the post request of the image that the user took, we stored it in AsynchStorage then sent it out to AWS cloud storage. 

## Authors / Acknowledgments

* ** Evan Peterson | Ryan Clyde | Carlie Ostrom | Audrey Setiadarma **

