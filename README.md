# Curse-word generator

## The process

So this is a bit of a weird one, a friend of mine told me I was getting repetitive when I was trying to lay emphasis on something, so she said "you should use a new word every day, so it stays fresh and whatnot", to which I responded to, "yeah but I'm not that creative nor do I want to think of a new word every day" so she challenged me to create a website to do just that for me. That's exactly what I did, in 2 days, because lockdown. It's somewhat of a bare CSS, but I didn't feel like doing too much front-end, but it looks pretty good in my opinion. I decided on using Python for the server simply because my GitHub profile consists of 43% JavaScript programs, and while I like the language a lot and I know a lot about it, some variation can never hurt. I definitely didn't feel like using C++ because the documentation on just about everything is just non-existent. I decided on using React again anyway for the front-end because I'm really starting to like React and I don't really feel like trying out Angular.

## Building

### The server

Go into the Server folder and install the modules (`flask`, `flask_restful` and `flask_cors`), after that there's no building to it, just run `python3 main.py` and you should be good.

### The client

Just go into the Client folder and run `npm run build` after installing all the modules (`npm i`), then install Serve by doing `npm i serve`. After that, you're done.

## Running it

To run it, just go into the `Client` folder, and use "serve -s build", you do need to start and kickstart the API, by creating the `curse_words.json` file and adding 1 or more words into it manually, after that just use `python3 main.py` in the Server folder and you should be good to go. Do note the Api.js file in the client, make sure the server's address is correct according to your setup.