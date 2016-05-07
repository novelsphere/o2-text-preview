# o2-text-preview

[![Build Status](https://travis-ci.org/novelsphere/o2-text-preview.svg?branch=master)](https://travis-ci.org/novelsphere/o2-text-preview)

- Keep displaying texts on a layer
- Usually used for configuration screen (e.g. configurating text speed, color, size, etc)
- Users can see their changes instantly
- テキストのプレビューを表示するプラグイン
- 文字の表示速度、色、大きさとかをユーザーに設定させる時、確認に使える

## Usage 使い方

- Download `text-preview.js`

- Move the file to your project's plugin folder

- Add this to the beginning of your `first.ks`
  ```
  [o2_loadplugin module="text-preview.js"]
  ```

- Start the preview like this
  ```
  [text_preview_start layer=message0 page=fore delay=1000]
  ```
  - Show preview witn 1 second delay between

- Stop it liek this

  ```
  [text_preview_end]
  ```

- There can only be one text preview running at the same time.

------

- `text-preview.js` をダウンロード

- ファイルをプロジェクトの plugin フォルダーに移動

- `first.ks` の最初にこれを追加

  ```
  [o2_loadplugin module="text-preview.js"]
  ```

- こういう風にプレビューを起動する

  ```
  [text_preview_start layer=message0 page=fore delay=1000]
  ```

  - プレビューの間に1秒の間隔を挟む

- これで止める

  ```
  [text_preview_end]
  ```

- テキストプレビューは同時に一つしか走れない
