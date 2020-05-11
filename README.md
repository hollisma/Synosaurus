[src/favicon.ico]
# How to Use
Synthesaurus lets you upgrade your writing by synthesizing it with a thesaurus and creating more powerful words. To use it, enter some text in the text box and click on any of the bold words that you want to change. Find a synonym that better suits your text, then choose it to replace your original word.

# How to Install
This app is running at [synthesaurus.surge.sh], but if you want to run it locally, here's what to do: 

First, clone the repo and run 'npm install' to install the dependencies. Then run 'npm run build' to create a dist folder. To run locally, run 'npm start'. To get it hosted with Surge, install surge and run 'surge', then authenticate yourself, choose the dist folder, then type in a url. 

When editting, there are some scripts that might be of use. Run 'npm run format' to format the code according to the .prettierrc file. Run 'npm prebuild' to recompile the tailwind.css file. Any changes you make to tailwind.css won't take effect until you recompile it. 

# Future
Some things to add in the future include:
* Better styling
* Additional features like copying to pastebin, sharing, etc
* Can also do some NLP and do sentiment analysis, analyze dialog to see which character says what
