This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Description
The Objective of this project was to create a clone of MAC's Finder application. It'll have all the basic, level based file navigation interactions.

## Assumptions
1. Since this is only a WebApp we're not getting the data from the file system. The objective is just to clone the functionality and visuals only. 
2. We're using a simple JSON file to store the data.
3. Any OBJECT in the JSON is considered as directory. Where **KEY** is going to be the **NAME** of the directory and the **VALUE** (the object itself) is the **content of the directory**.
4. Similarly, Any string is considered as a file. Where the **KEY** is going to be the **NAME** of the file and the **VALUE** is going to be the **CONTENTS**. 

So if the JSON is something like this.
``` 
{
    "file1.txt" : "Some random text",
    "folder1" : {
        "file1.1.txt" : "Some random text",
        "folder1.1": {
            "file1.1.1.txt" : "Some random text"
        }
    },
    "folder2" : {
        "file2.1.txt" : "Some random text"
    }
}
```

It's going to represent the below directory structure

```
/(root)
|_ file1.txt
|_ folder1
   |_ file1.1.txt
   |_ folder1.1
      |_ file1.1.1.txt
|_ folder2
   |_ file2.1.txt
```

## How to get this thing working ?
1. Use `git clone` or download the zip.
2. If you've downloaded the zip extract it.
3. `cd` into the repository.
4. Run `npm install` or `yarn` (if you're using it)
5. Run `npm start` or `yarn start` (Again if you're using it)
6. A browser window will automatically open & in case if it didn't open your favourite browser and go to : [http://localhost:3000](http://localhost:3000).

## What did i use to build it ?
1. `React` as the view layer.
2. `SASS` Syntactically Awesome.
3. `FontAwesome` for some icons.
4. Since the project itself was very small I didn't feel the need of `REDUX` here.