# ARB_Ext

Arbitrary JS Extension to help you run and test ad-hoc webextension scripts.

## Install

Use the [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) command to build and install it

```
$ git clone https://github.com/theju/arb_ext
$ cd arb_ext
$ web-ext build
```

Then use the Add-Ons/Extensions manager of your browser to install the extension present in the `web-ext-artifacts` folder.

## Usage

After having installed the extension, you will see a new icon in the browser toolbar. Clicking it will open a new tab which has a text area where you can enter your webextension code. Or you could use the file input to load the code.

## License

`MIT License`. Please check the `LICENSE` file for more details.
