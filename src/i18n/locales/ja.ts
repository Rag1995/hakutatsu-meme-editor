export default {
  greeting: 'こんにちは',
  farewell: 'さようなら',
  title: 'Hakutatsuミームエディター',
  routes: {
    home: 'ホーム',
    about: 'アバウト',
  },
  gallery: {
    title: 'ギャラリー',
    description: 'ドラッグして画像の順序を変更できます！',
  },
  footer: {
    websiteAuthor: 'ウェブサイトの作者',
    author: {
      description: '仕事はプログラミング、趣味もプログラミング',
    },
  },
  files: {
    image: '画像',
  },
  modal: {
    changePicture: {
      title: '画像を選択',
      select: '選択',
      noImages: '利用可能な画像はありません',
    },
  },
  buttons: {
    // common
    next: '次へ',
    prev: '前へ',
    done: '完了',
    close: '閉じる',
    remove: '削除',
    generateFile: '{file}を生成',
    downloadFile: '{file}をダウンロード',
    // header
    startDriver: 'ガイドを開始',
    githubRepo: 'GitHub リポジトリ',
    toggleLightMode: 'ライトモードに切り替え',
    toggleDarkMode: 'ダークモードに切り替え',
    changeLanguage: '言語を変更',
    // textbox
    addText: '文字追加',
    addToGallery: 'ギャラリーに追加',
    decreaseFontSize: '文字縮小',
    increaseFontSize: '文字拡大',
    resetFontSize: 'サイズ初期化',
    resetRotate: '回転初期化',
    resetPosition: '位置初期化',
    removeText: '文字削除',
    // image editor
    changePicture: '画像を変更',
  },
  placeholders: {
    inputText: '文字入力#{number}',
  },
  driver: {
    steps: {
      hakutatsu: {
        title: 'ここを見て！',
        description: '彼の名前は Hakutatsu！かわいい北極オオカミです！',
      },
      textboxEditor: {
        title: 'セリフを追加',
        description:
          'ここで Hakutatsu に言わせたいセリフを入力できます！どんなセリフでもOK！',
      },
      addText: {
        title: 'もっと...もっとセリフを！',
        description: 'セリフが1つでは足りない？もっと追加しましょう！',
      },
      downloadImage: {
        title: 'みんなと共有！',
        description: '完成したら画像をダウンロードできます！',
      },
      addToGallery: {
        title: 'ギャラリーに追加',
        description: '現在の画像をギャラリーに保存できます！',
      },
      gallery: {
        title: 'あなた専用のギャラリー',
        description:
          'ここにはすべての画像が表示されます！ドラッグして順序を変更することもできます！',
      },
      gifGenerator: {
        title: 'GIFを生成！',
        description: 'Hakutatsu のセリフをGIFアニメーションにできます！',
      },
      hakutatsuSocialMedia: {
        title: '楽しんでね :)',
        description:
          'Hakutatsu が好きなら、ぜひ彼のSNSをフォローしてください！',
      },
    },
    buttons: {
      done: '完了',
      close: '閉じる',
      next: '次へ',
      prev: '前へ',
    },
  },
}
