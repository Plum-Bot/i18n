# I18n

Manages the translation files used by Plum. They're downloaded every reboot.

## Contributing

To help translate Plum, clone this repository and check if the folder of the language
you're translating exists.
If it doesn't, copy the folder `en_US` and rename it as the ISO 639-1 code formatted as:
`lang_REGION` (example: `it_IT`). If it does, don't do anything.

Enter the folder and check out the JSON files. Each JSON is made like this:

```json
{
    "KEY": "Value, with a {{placeholder}}"
}
```

DON'T rename the files and DON'T edit the keys names, otherwise it won't work. `{{placeholder}}`s
are also values that shouldn't be edited, they'll be replaces at runtime.

Once you're done translating, just send a pull request. If it's accepted, you'll see your
changes on the next reboot of the bot.

Obviously, don't forget to [join our Discord!](https://discord.gg/MDtgmEM)
