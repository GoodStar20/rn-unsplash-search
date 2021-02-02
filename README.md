# Search Photos from Usplash

# A React Native chat app

This is an application that you can enter a keyword and view images that match the keyword.

- Entering and submitting a keyword should result in a collection of images that you can scroll through
- Updating the search keyword and resubmitting should replace the collection of images with those returned by the new search.
- You should be able to "Pin" images so that they remain in the collection. When updating your search keyword, the pinned images should remain even if they aren’t returned in the new search.
- You should be able to unpin pinned images.

## Getting Started

### Clone this repo

```bash
$ git clone https://github.com/GoodStar20/rn-unsplash-search.git
```

### Install dependencies

```bash
$ cd rn-unsplash-search
$ yarn install
```

### Run the App on iOS

And then, run the app

```bash
$ cd ios && pod install
$ yarn ios
```

### Run the App on Android

And then, run the app

```bash
$ yarn android
```

## How It Works

- If you enter search keyword and press search button, you can see searched images.
- If you press "Pin" icon, you can see "Pin" images in "Pinned" Tab.
