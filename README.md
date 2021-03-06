![Hero](docs/github-hero-logo.png?raw=true "Logo")
===========

QR Code generator extension for [EasyEDA](https://easyeda.com/) and [LCEDA: Standard Edition](https://lceda.cn/standard).

## Installation

1. Download [easyeda-qrcode-generator-v1.0.2.zip](https://github.com/turbobabr/easyeda-qrcode-generator-extension/releases/download/v1.0.2/easyeda-qrcode-generator-v1.0.2.zip)
2. Un-zip the downloaded archive on your hard drive.
3. Go to `Extension Settings` dialog by using main menu `Advanced -> Extensions -> Extensions Settings...`.
4. Click `Load Extension...` button and add all the files in from the extracted folder using `Select Files...` button. 
5. Click `Load Extension` and close the `Extension Settings` dialog.

![Installation](docs/easyeda-qrcode-installation.gif?raw=true)

## Usage

1. Click on `QRCode -> Generate` menu item.
2. Enter code size by specifying certain unit via suffix - e.g. `10mm`, `1.1in`, `340mil`.
3. Enter content - URL or any text.
4. Hit the `Place` button and add generated code to the `PCB`.

![Usage Demo](docs/easyeda-qrcode-usage.gif?raw=true)

> NOTE: The code is placed on the currently selected layer, but it's possible to switch the destination layer later any moment.

## Feedback

If you discover  any issue or have any suggestions for improvement of the plugin, please [open an issue](https://github.com/turbobabr/easyeda-qrcode-generator-extension/issues) or find me on twitter [@turbobabr](http://twitter.com/turbobabr).

## License

MIT License

Copyright (c) 2021 Andrey Shakhmin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
