export default {
  greeting: 'Hello',
  farewell: 'Goodbye',
  title: 'Hakutatsu Meme Editor',
  routes: {
    home: 'Home',
    about: 'About',
  },
  gallery: {
    title: 'Gallery',
    description: 'Drag to reorder images!',
  },
  footer: {
    websiteAuthor: 'Website Author',
    author: {
      description: 'Work is coding, hobby is coding',
    },
  },
  files: {
    image: 'Image',
  },
  modal: {
    changePicture: {
      title: 'Choose Image',
      select: 'Select',
      noImages: 'No images available',
    },
  },
  buttons: {
    // common
    next: 'Next',
    prev: 'Previous',
    done: 'Done',
    close: 'Close',
    remove: 'Remove',
    generateFile: 'Generate {file}',
    downloadFile: 'Download {file}',
    // header
    startDriver: 'Start Guide',
    githubRepo: 'GitHub Repository',
    toggleLightMode: 'Switch to light mode',
    toggleDarkMode: 'Switch to dark mode',
    changeLanguage: 'Change Language',
    // textbox
    addText: 'Add Text',
    addToGallery: 'Add to Gallery',
    decreaseFontSize: 'Decrease font size',
    increaseFontSize: 'Increase font size',
    resetFontSize: 'Reset font size',
    resetRotate: 'Reset rotate',
    resetPosition: 'Reset position',
    removeText: 'Delete text',
    // image editor
    changePicture: 'Change Picture',
  },
  placeholders: {
    inputText: 'InputText#{number}',
  },
  driver: {
    steps: {
      hakutatsu: {
        title: 'Look over here!',
        description: 'His name is Hakutatsu! A cute Arctic wolf!',
      },
      textboxEditor: {
        title: 'Add a caption',
        description:
          'You can enter any caption you want Hakutatsu to say here!',
      },
      addText: {
        title: 'More... More captions!',
        description: "One caption isn't enough? Add more captions!",
      },
      downloadImage: {
        title: 'Share it with everyone!',
        description: "Once you're done, you can download the image!",
      },
      addToGallery: {
        title: 'Add to gallery',
        description: 'You can save the current image to your gallery!',
      },
      gallery: {
        title: 'Your personal gallery',
        description:
          'This shows all your images! You can also drag to reorder them!',
      },
      gifGenerator: {
        title: 'Generate a GIF!',
        description: "You can turn Hakutatsu's captions into a GIF animation!",
      },
      hakutatsuSocialMedia: {
        title: 'Have fun :)',
        description:
          'If you like Hakutatsu, remember to follow him on social media!',
      },
    },
    buttons: {
      done: 'Done',
      close: 'Close',
      next: 'Next',
      prev: 'Previous',
    },
  },
}
